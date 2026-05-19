// client/src/pages/warehouse.js
// WAREHOUSE — FULL REBUILD
// Handles all three scenarios simultaneously:
//   1. Full delivery, all correct
//   2. Multiple suppliers, arriving at different times
//   3. Exceptions (configurable list)
// Bond label + Final label generation
// Weight/dimensions per delivery event
// Country of origin per line item
// Warehouse progress flows to Open Orders without overwriting customer notes

import { db } from '../services/firebase.js'
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  addDoc,
  deleteDoc
} from 'firebase/firestore'
import { notify } from '../services/notify.js'

// ── module state ─────────────────────────────────────────────
let allOrders   = []
let countries   = []
let exReasons   = []   // configurable exception reasons
let currentHost = null // top-level panel so we can nav back

// ─────────────────────────────────────────────────────────────
// ENTRY POINT
// ─────────────────────────────────────────────────────────────
export async function renderWarehouse(panel) {
  currentHost = panel
  await loadReferenceData()

  panel.innerHTML = `
    <h2 style="margin-bottom:16px">Warehouse</h2>

    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <input
          id="wh-search"
          placeholder="Search by order number or customer…"
          style="flex:1;min-width:200px"
        />
        <button id="wh-reload">Reload</button>
      </div>
    </div>

    <div id="wh-grid"></div>
  `

  document.getElementById('wh-reload').onclick =
    () => renderWarehouse(panel)

  document.getElementById('wh-search').oninput = e => {
    const q = e.target.value.toUpperCase()
    drawGrid(allOrders.filter(x =>
      ((x.poNumber || '') + (x.customerName || ''))
        .toUpperCase().includes(q)
    ))
  }

  drawGrid(allOrders)
}

// ─────────────────────────────────────────────────────────────
// DATA LOADERS
// ─────────────────────────────────────────────────────────────
async function loadReferenceData() {
  const [ordSnap, cntSnap, exSnap] = await Promise.all([
    getDocs(collection(db, 'orders')),
    getDocs(collection(db, 'countries')),
    getDocs(collection(db, 'exceptionReasons'))
  ])

  allOrders = ordSnap.docs.map(d => ({ id: d.id, ...d.data() }))
    .filter(shouldShowInWarehouse)

  countries = cntSnap.docs.map(d => {
    const x = d.data()
    return { name: x.name || x.country || x.countryName || '' }
  }).filter(x => x.name).sort((a,b) => a.name.localeCompare(b.name))

  exReasons = exSnap.empty
    ? defaultExReasons()
    : exSnap.docs.map(d => ({ id: d.id, ...d.data() }))
}

function defaultExReasons() {
  return [
    { id: 'wrong_part',  label: 'Incorrect part number' },
    { id: 'damaged',     label: 'Damage' },
    { id: 'short_qty',   label: 'Incorrect delivery quantity' }
  ]
}

// ─────────────────────────────────────────────────────────────
// DASHBOARD GRID
// ─────────────────────────────────────────────────────────────
function drawGrid(rows) {
  const grid = document.getElementById('wh-grid')
  if (!grid) return

  if (!rows.length) {
    grid.innerHTML = `<div class="card">No orders found.</div>`
    return
  }

  grid.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Order No.</th>
          <th>Customer</th>
          <th>Suppliers</th>
          <th>Warehouse status</th>
          <th>Bond deliveries</th>
          <th>Summary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(x => `
          <tr>
            <td><strong>${x.poNumber || '—'}</strong></td>
            <td>${x.customerName || '—'}</td>
            <td>${supplierList(x)}</td>
            <td>${whStatusBadge(x)}</td>
            <td style="font-size:12px;color:#9ca3af">${bondSummary(x)}</td>
            <td style="font-size:12px;color:#9ca3af">${whSummary(x)}</td>
            <td>
              <button onclick="window._whOpen('${x.id}')">Book in / labels</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `

  window._whOpen = id => openDetail(id)
}

// ─────────────────────────────────────────────────────────────
// DETAIL VIEW — the main warehouse working screen
// ─────────────────────────────────────────────────────────────
async function openDetail(id) {
  const snap = await getDoc(doc(db, 'orders', id))
  if (!snap.exists()) { notify('Order not found', 'error'); return }

  const order = { id: snap.id, ...snap.data() }
  const panel = currentHost

  // Group items by supplier
  const bySupplier = groupBySupplier(order.items || [])
  const supplierNames = Object.keys(bySupplier)

  panel.innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
      <button id="wh-back-results">← Back to results</button>
      <h2 style="margin:0">
        Warehouse — ${order.poNumber || '—'}
        <span style="font-size:14px;font-weight:400;color:#9ca3af;margin-left:10px">
          ${order.customerName || ''}
        </span>
      </h2>
      ${whStatusBadge(order)}
    </div>

    ${order.warehouseSummary ? `
      <div class="card" style="margin-bottom:16px;border-left:3px solid #3b82f6">
        <strong>Current status:</strong> ${order.warehouseSummary}
      </div>` : ''}

    ${deliveryEvents(order).length ? `
      <div class="card" style="margin-bottom:16px;border-left:3px solid #059669">
        <strong>In bond:</strong> ${bondSummary(order)}
      </div>` : ''}

    <div class="card" style="margin-bottom:16px">
      <h3 style="margin-bottom:10px">Warehouse actions</h3>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <button id="wh-bond-label">
          Print Bond Label
        </button>
        <button id="wh-final-label">
          Print Final Label
        </button>
        <span style="color:#9ca3af;font-size:12px">
          Book goods in using the supplier tabs and line-item Receive buttons below.
        </span>
      </div>
    </div>

    <!-- ── SUPPLIER TABS ── -->
    <div style="display:flex;gap:6px;margin-bottom:0;flex-wrap:wrap">
      ${supplierNames.map((sup, si) => `
        <button
          class="sup-tab ${si === 0 ? 'active-tab' : ''}"
          onclick="window._whTab(${si})"
          data-si="${si}"
          style="border-radius:6px 6px 0 0;margin-bottom:0;
            ${si === 0 ? 'background:#1d4ed8' : 'background:#1f2c44'}"
        >
          ${sup}
          ${supReceivedBadge(bySupplier[sup])}
        </button>
      `).join('')}
    </div>

    <!-- ── SUPPLIER PANELS ── -->
    ${supplierNames.map((sup, si) => `
      <div
        id="sup-panel-${si}"
        style="display:${si === 0 ? 'block' : 'none'}"
      >
        ${renderSupplierPanel(order, sup, bySupplier[sup], si)}
      </div>
    `).join('')}

    <!-- ── EXCEPTION REASONS ADMIN ── -->
    <div class="card" style="margin-top:20px">
      <details>
        <summary style="cursor:pointer;font-weight:600;color:#9ca3af;font-size:13px">
          ⚙ Manage exception reason list
        </summary>
        <div id="ex-reason-manager" style="margin-top:12px">
          ${renderExReasonManager()}
        </div>
      </details>
    </div>

  `

  // Store panel ref for back button
  window._whPanel = panel

  const backBtn = document.getElementById('wh-back-results')
  if (backBtn) backBtn.onclick = () => renderWarehouse(panel)

  const bondBtn = document.getElementById('wh-bond-label')
  if (bondBtn) bondBtn.onclick = () => printBondLabel(order.id)

  const finalBtn = document.getElementById('wh-final-label')
  if (finalBtn) finalBtn.onclick = () => printFinalLabel(order.id)

  // Tab switching
  window._whTab = si => {
    supplierNames.forEach((_, idx) => {
      const btn = document.querySelector(`[data-si="${idx}"]`)
      const pnl = document.getElementById(`sup-panel-${idx}`)
      if (btn) btn.style.background = idx === si ? '#1d4ed8' : '#1f2c44'
      if (pnl) pnl.style.display = idx === si ? 'block' : 'none'
    })
  }

  // Wire receive buttons
  supplierNames.forEach((sup, si) => {
    const lineIndices = bySupplier[sup].map(x => x._originalIndex)
    lineIndices.forEach((origIdx, linePos) => {
      const btnId = `recv-btn-${si}-${linePos}`
      const btn = document.getElementById(btnId)
      if (btn) btn.onclick = () => receiveLine(order.id, origIdx, si, linePos)
    })
    const savePackBtn = document.getElementById(`save-pack-${si}`)
    if (savePackBtn) savePackBtn.onclick = () => savePackingInfo(order.id, si, sup)
  })

  // Wire exception manager
  wireExReasonManager(order.id)

}

function shouldShowInWarehouse(order) {
  return (order.status || '') !== 'Packed' &&
    (order.warehouseStatus || '') !== 'Packed'
}

// ─────────────────────────────────────────────────────────────
// SUPPLIER PANEL (one per supplier tab)
// ─────────────────────────────────────────────────────────────
function renderSupplierPanel(order, supplierName, lines, si) {
  const deliveries = deliveryEvents(order)
    .filter(x => x.supplierName === supplierName)

  return `
    <div class="card" style="border-radius:0 6px 6px 6px;margin-bottom:0">

      <!-- ── LINE ITEMS TABLE ── -->
      <div style="overflow-x:auto">
        <table class="table">
          <thead>
            <tr>
              <th>Part no.</th>
              <th>Stock code</th>
              <th>Description</th>
              <th>Ordered</th>
              <th>Previously received</th>
              <th>Receive now</th>
              <th>Country of origin</th>
              <th>Line status</th>
              <th>Exception reason</th>
              <th>Note</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${lines.map((x, linePos) => {
              const prevRec = Number(x.receivedQty || 0)
              const balance = Number(x.qty) - prevRec
              return `
                <tr id="line-row-${si}-${linePos}">
                  <td>${x.partNumber || '—'}</td>
                  <td>${x.stockCode || '—'}</td>
                  <td>${x.description || '—'}</td>
                  <td>${x.qty}</td>
                  <td>${prevRec}</td>
                  <td>
                    <input
                      id="rcv-${si}-${linePos}"
                      type="number"
                      min="0"
                      max="${balance}"
                      placeholder="0"
                      style="width:70px"
                      oninput="window._whAutoStatus(${si},${linePos},${Number(x.qty)},${prevRec})"
                    />
                  </td>
                  <td>
                    <select id="coo-${si}-${linePos}" style="min-width:120px">
                      <option value="">Select…</option>
                      ${countries.map(c => `
                        <option ${c.name === (x.countryOfOrigin||'') ? 'selected' : ''}>
                          ${c.name}
                        </option>
                      `).join('')}
                    </select>
                  </td>
                  <td>
                    <select id="st-${si}-${linePos}" style="min-width:110px">
                      <option ${(x.lineStatus||'Open')==='Open'      ? 'selected':''}>Open</option>
                      <option ${(x.lineStatus||'')==='Accepted'      ? 'selected':''}>Accepted</option>
                      <option ${(x.lineStatus||'')==='Partial'       ? 'selected':''}>Partial</option>
                      <option ${(x.lineStatus||'')==='Query'         ? 'selected':''}>Query</option>
                    </select>
                  </td>
                  <td>
                    <select id="ex-${si}-${linePos}" style="min-width:160px">
                      <option value="">None</option>
                      ${exReasons.map(r => `
                        <option value="${r.label}"
                          ${(x.exceptionReason||'')===r.label ? 'selected':''}
                        >${r.label}</option>
                      `).join('')}
                    </select>
                  </td>
                  <td>
                    <input
                      id="nt-${si}-${linePos}"
                      value="${x.note || ''}"
                      placeholder="Note…"
                      style="width:120px"
                    />
                  </td>
                  <td>
                    <button id="recv-btn-${si}-${linePos}">
                      Receive
                    </button>
                  </td>
                </tr>
              `
            }).join('')}
          </tbody>
        </table>
      </div>

      <!-- ── PACKING / WEIGHT / DIMENSIONS ── -->
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid #1f2c44">
        <h4 style="margin-bottom:12px;color:#9ca3af;font-size:13px;text-transform:uppercase;letter-spacing:.05em">
          Weight, dimensions &amp; bond location — ${supplierName}
        </h4>
        <div class="grid-4" style="gap:10px">
          <div>
            <label style="font-size:12px;color:#9ca3af">Cartons</label>
            <input id="pack-cartons-${si}"
              placeholder="No. cartons"
              value="" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Weight (kg)</label>
            <input id="pack-weight-${si}"
              type="number" step="0.01"
              placeholder="Total kg"
              value="" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Length (cm)</label>
            <input id="pack-l-${si}"
              type="number"
              placeholder="L"
              value="" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Width (cm)</label>
            <input id="pack-w-${si}"
              type="number"
              placeholder="W"
              value="" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Height (cm)</label>
            <input id="pack-h-${si}"
              type="number"
              placeholder="H"
              value="" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Bond location</label>
            <input id="pack-bond-${si}"
              placeholder="e.g. A3, Bay 7…"
              value="" />
          </div>
        </div>
        <div style="margin-top:12px">
          <button id="save-pack-${si}" style="background:#059669">
            Save delivery into bond
          </button>
        </div>

        ${deliveries.length ? `
          <div style="margin-top:16px">
            <h4 style="margin-bottom:8px;color:#9ca3af;font-size:13px">
              Delivery history in bond
            </h4>
            <table class="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Cartons</th>
                  <th>Weight</th>
                  <th>Dimensions</th>
                  <th>Bond location</th>
                </tr>
              </thead>
              <tbody>
                ${deliveries.map(x => `
                  <tr>
                    <td>${formatDateTime(x.savedAt)}</td>
                    <td>${x.cartons || '—'}</td>
                    <td>${x.totalWeight || '—'} kg</td>
                    <td>${formatDims(x)}</td>
                    <td>${x.bondLocation || '—'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>` : ''}
      </div>

    </div>
  `
}

// ─────────────────────────────────────────────────────────────
// AUTO STATUS HELPER — called on qty input
// ─────────────────────────────────────────────────────────────
window._whAutoStatus = (si, linePos, orderedQty, prevRec) => {
  const rcvEl = document.getElementById(`rcv-${si}-${linePos}`)
  const stEl  = document.getElementById(`st-${si}-${linePos}`)
  if (!rcvEl || !stEl) return

  const now   = Number(rcvEl.value || 0)
  const total = prevRec + now

  if (total === 0) {
    stEl.value = 'Open'
  } else if (total >= orderedQty) {
    stEl.value = 'Accepted'
  } else {
    stEl.value = 'Partial'
  }
}

// ─────────────────────────────────────────────────────────────
// RECEIVE LINE — save a single line receipt to Firestore
// ─────────────────────────────────────────────────────────────
async function receiveLine(orderId, origIndex, si, linePos) {
  const snap = await getDoc(doc(db, 'orders', orderId))
  if (!snap.exists()) { notify('Order not found', 'error'); return }

  const order = { id: snap.id, ...snap.data() }
  const items = [...(order.items || [])]
  const item  = { ...items[origIndex] }

  const addQty = Number(v(`rcv-${si}-${linePos}`) || 0)
  if (addQty < 0) { notify('Enter a valid quantity', 'error'); return }

  // Update quantities
  item.receivedQty      = Number(item.receivedQty || 0) + addQty
  item.countryOfOrigin  = v(`coo-${si}-${linePos}`)
  item.lineStatus       = v(`st-${si}-${linePos}`)
  item.exceptionReason  = v(`ex-${si}-${linePos}`)
  item.note             = v(`nt-${si}-${linePos}`)

  // Auto-correct status if needed
  if (item.receivedQty >= Number(item.qty)) {
    if (item.lineStatus !== 'Query') item.lineStatus = 'Accepted'
  } else if (item.receivedQty > 0) {
    if (item.lineStatus !== 'Query') item.lineStatus = 'Partial'
  }

  items[origIndex] = item

  // Recalculate order-level warehouse status
  const whStatus  = calcWhStatus(items)
  const whSummary = calcWhSummary(order, items)

  await updateDoc(doc(db, 'orders', orderId), {
    items,
    warehouseStatus:  whStatus,
    warehouseSummary: whSummary
  })

  notify('Receipt saved', 'success')
  openDetail(orderId)
}

// ─────────────────────────────────────────────────────────────
// SAVE PACKING INFO (weight, dims, bond location) per supplier
// ─────────────────────────────────────────────────────────────
async function savePackingInfo(orderId, si, supplierName) {
  const snap = await getDoc(doc(db, 'orders', orderId))
  if (!snap.exists()) { notify('Order not found', 'error'); return }

  const order = { id: snap.id, ...snap.data() }

  const delivery = {
    id:           `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    supplierName,
    cartons:     v(`pack-cartons-${si}`),
    totalWeight: v(`pack-weight-${si}`),
    length:      v(`pack-l-${si}`),
    width:       v(`pack-w-${si}`),
    height:      v(`pack-h-${si}`),
    bondLocation:v(`pack-bond-${si}`),
    savedAt:     new Date().toISOString()
  }

  if (!delivery.cartons && !delivery.totalWeight &&
      !delivery.length && !delivery.width &&
      !delivery.height && !delivery.bondLocation) {
    notify('Enter delivery details before saving', 'warn')
    return
  }

  const warehouseDeliveries = [
    ...deliveryEvents(order),
    delivery
  ]

  const { packingBySup, packing } =
    aggregateDeliveries(warehouseDeliveries)

  await updateDoc(doc(db, 'orders', orderId), {
    warehouseDeliveries,
    packingBySup,
    packing   // shipping page reads `packing`
  })

  notify(`Delivery saved into bond for ${supplierName}`, 'success')
  openDetail(orderId)
}

// Merge delivery events into supplier and total packing for shipping
function aggregateDeliveries(deliveries) {
  const packingBySup = {}

  deliveries.forEach(d => {
    const supplier = d.supplierName || 'Unknown supplier'
    const current = packingBySup[supplier] || {
      cartons: 0,
      totalWeight: 0,
      dimensions: [],
      bondLocations: [],
      latestSavedAt: ''
    }

    current.cartons += Number(d.cartons || 0)
    current.totalWeight += Number(d.totalWeight || 0)
    if (d.length && d.width && d.height) current.dimensions.push(formatDims(d))
    if (d.bondLocation) current.bondLocations.push(d.bondLocation)
    current.latestSavedAt = d.savedAt || current.latestSavedAt

    packingBySup[supplier] = current
  })

  Object.keys(packingBySup).forEach(supplier => {
    const p = packingBySup[supplier]
    p.cartons = p.cartons || ''
    p.totalWeight = p.totalWeight ? p.totalWeight.toFixed(2) : ''
    p.dimensions = [...new Set(p.dimensions)].join(' / ')
    p.bondLocation = [...new Set(p.bondLocations)].join(' / ')
    p.savedAt = p.latestSavedAt
    delete p.bondLocations
    delete p.latestSavedAt
  })

  const packing = aggregatePacking(packingBySup)
  return { packingBySup, packing }
}

function aggregatePacking(packingBySup) {
  let totalWeight = 0, totalCartons = 0
  const dims = []

  Object.values(packingBySup).forEach(p => {
    totalWeight  += Number(p.totalWeight || 0)
    totalCartons += Number(p.cartons || 0)
    if (p.dimensions) dims.push(p.dimensions)
    if (p.length && p.width && p.height) dims.push(formatDims(p))
  })

  return {
    totalWeight:  totalWeight.toFixed(2),
    cartons:      totalCartons,
    dimensions:   dims.join(' / '),
    // Individual supplier bond locations
    bondLocations: Object.entries(packingBySup)
      .filter(([,p]) => p.bondLocation)
      .map(([sup, p]) => `${sup}: ${p.bondLocation}`)
      .join(' | ')
  }
}

// ─────────────────────────────────────────────────────────────
// STATUS / SUMMARY CALCULATIONS
// ─────────────────────────────────────────────────────────────
function calcWhStatus(items) {
  if (!items.length) return 'Open'
  if (items.some(x => x.lineStatus === 'Query'))   return 'Query'
  if (items.every(x => Number(x.receivedQty) >= Number(x.qty))) return 'Received'
  if (items.some(x => Number(x.receivedQty) > 0))  return 'Partial'
  return 'Open'
}

function calcWhSummary(order, items) {
  const bySupplier = groupBySupplier(items)
  const parts = Object.entries(bySupplier).map(([sup, lines]) => {
    const allIn  = lines.every(x => Number(x.receivedQty) >= Number(x.qty))
    const noneIn = lines.every(x => !Number(x.receivedQty))
    const hasQ   = lines.some(x => x.lineStatus === 'Query')
    if (hasQ)    return `${sup}: Query`
    if (allIn)   return `${sup}: Received`
    if (noneIn)  return `${sup}: Awaiting`
    return `${sup}: Partial (${lines.map(x =>
      `${x.stockCode} ${x.receivedQty}/${x.qty}`).join(', ')})`
  })
  return parts.join(' | ')
}

function whSummary(order) {
  return order.warehouseSummary ||
    calcWhSummary(order, order.items || [])
}

function deliveryEvents(order) {
  if (Array.isArray(order.warehouseDeliveries)) {
    return order.warehouseDeliveries
  }

  return Object.entries(order.packingBySup || {}).map(([supplierName, p]) => ({
    supplierName,
    cartons: p.cartons,
    totalWeight: p.totalWeight,
    length: p.length,
    width: p.width,
    height: p.height,
    bondLocation: p.bondLocation,
    savedAt: p.savedAt
  }))
}

function bondSummary(order) {
  const deliveries = deliveryEvents(order)
  if (!deliveries.length) return 'No deliveries in bond'

  const totalCartons = deliveries.reduce((s, x) =>
    s + Number(x.cartons || 0), 0)
  const totalWeight = deliveries.reduce((s, x) =>
    s + Number(x.totalWeight || 0), 0)
  const locations = [...new Set(
    deliveries.map(x => x.bondLocation).filter(Boolean)
  )]

  return `${deliveries.length} delivery${deliveries.length === 1 ? '' : 'ies'} in bond` +
    `${totalCartons ? `, ${totalCartons} carton${totalCartons === 1 ? '' : 's'}` : ''}` +
    `${totalWeight ? `, ${totalWeight.toFixed(2)} kg` : ''}` +
    `${locations.length ? `, ${locations.join(' / ')}` : ''}`
}

// ─────────────────────────────────────────────────────────────
// EXCEPTION REASON MANAGER
// ─────────────────────────────────────────────────────────────
function renderExReasonManager() {
  return `
    <div id="ex-list">
      ${exReasons.map(r => `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <span style="flex:1">${r.label}</span>
          <button
            onclick="window._whDelExReason('${r.id}')"
            style="background:#7f1d1d;padding:4px 8px;font-size:12px"
          >Remove</button>
        </div>
      `).join('')}
    </div>
    <div style="display:flex;gap:8px;margin-top:10px">
      <input id="new-ex-reason" placeholder="New exception reason…" style="flex:1" />
      <button onclick="window._whAddExReason()">Add</button>
    </div>
  `
}

function wireExReasonManager(orderId) {
  window._whAddExReason = async () => {
    const label = v('new-ex-reason').trim()
    if (!label) { notify('Enter a reason', 'warn'); return }
    await addDoc(collection(db, 'exceptionReasons'), { label })
    notify('Exception reason added', 'success')
    await loadReferenceData()
    const mgr = document.getElementById('ex-reason-manager')
    if (mgr) {
      mgr.innerHTML = renderExReasonManager()
      wireExReasonManager(orderId)
    }
  }

  window._whDelExReason = async id => {
    if (id.startsWith('wrong_') || id === 'damaged' || id === 'short_qty') {
      notify('Default reasons cannot be removed', 'warn'); return
    }
    await deleteDoc(doc(db, 'exceptionReasons', id))
    notify('Removed', 'success')
    await loadReferenceData()
    const mgr = document.getElementById('ex-reason-manager')
    if (mgr) {
      mgr.innerHTML = renderExReasonManager()
      wireExReasonManager(orderId)
    }
  }
}

// ─────────────────────────────────────────────────────────────
// LABEL PRINTING
// ─────────────────────────────────────────────────────────────
async function printBondLabel(orderId) {
  const snap = await getDoc(doc(db, 'orders', orderId))
  if (!snap.exists()) return
  const order = { id: snap.id, ...snap.data() }
  const deliveries = deliveryEvents(order)

  // One bond label per supplier delivery
  const labelPages = deliveries.map(p => `
    <div style="
      font-family:Arial,sans-serif;
      border:3px solid #000;
      padding:24px;
      max-width:380px;
      margin:20px auto;
      page-break-after:always
    ">
      <div style="text-align:center;font-size:22px;font-weight:bold;margin-bottom:16px;letter-spacing:.05em">
        BOND LABEL
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        <tr><td style="padding:6px 4px;color:#555;width:40%">Order No.</td>
            <td style="padding:6px 4px;font-weight:700">${order.poNumber || '—'}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Supplier</td>
            <td style="padding:6px 4px;font-weight:700">${p.supplierName || '—'}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Weight</td>
            <td style="padding:6px 4px;font-weight:700">${p.totalWeight || '—'} kg</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Dimensions</td>
            <td style="padding:6px 4px;font-weight:700">${formatDims(p)}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Cartons</td>
            <td style="padding:6px 4px;font-weight:700">${p.cartons || '—'}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:8px 4px;color:#555">Bond location</td>
            <td style="padding:8px 4px;font-size:20px;font-weight:900">${p.bondLocation || '—'}</td></tr>
      </table>
    </div>
  `).join('')

  openPrintWindow('Bond Labels — ' + order.poNumber, labelPages)
}

async function printFinalLabel(orderId) {
  const snap = await getDoc(doc(db, 'orders', orderId))
  if (!snap.exists()) return
  const order = { id: snap.id, ...snap.data() }
  const packing = order.packing || {}

  const cooList = [...new Set(
    (order.items || [])
      .map(x => x.countryOfOrigin)
      .filter(Boolean)
  )].join(', ')

  const labelHtml = `
    <div style="
      font-family:Arial,sans-serif;
      border:3px solid #000;
      padding:24px;
      max-width:380px;
      margin:20px auto
    ">
      <div style="text-align:center;font-size:20px;font-weight:bold;margin-bottom:16px;letter-spacing:.05em">
        FINAL LABEL
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        <tr><td style="padding:6px 4px;color:#555;width:45%">Customer</td>
            <td style="padding:6px 4px;font-weight:700">${order.customerName || '—'}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Customer order no.</td>
            <td style="padding:6px 4px;font-weight:700">${order.poNumber || '—'}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">System order no.</td>
            <td style="padding:6px 4px;font-weight:700">${order.id}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Weight</td>
            <td style="padding:6px 4px;font-weight:700">${packing.totalWeight || '—'} kg</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Dimensions</td>
            <td style="padding:6px 4px;font-weight:700">${packing.dimensions || '—'}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Cartons</td>
            <td style="padding:6px 4px;font-weight:700">${packing.cartons || '—'}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:8px 4px;color:#555">Country of origin</td>
            <td style="padding:8px 4px;font-weight:700">${cooList || '—'}</td></tr>
      </table>
    </div>
  `
  openPrintWindow('Final Label — ' + order.poNumber, labelHtml)
}

function openPrintWindow(title, bodyHtml) {
  const w = window.open('', '_blank')
  w.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
      <style>
        body { margin:0; background:#fff; color:#000; }
        @media print { body { margin:0; } }
      </style>
    </head>
    <body>
      ${bodyHtml}
      <script>window.onload = () => { window.print(); }<\/script>
    </body>
    </html>
  `)
  w.document.close()
}

// ─────────────────────────────────────────────────────────────
// DISPLAY HELPERS
// ─────────────────────────────────────────────────────────────
function groupBySupplier(items) {
  const groups = {}
  items.forEach((item, idx) => {
    const sup = item.supplier || item.supplierName || 'Unknown supplier'
    if (!groups[sup]) groups[sup] = []
    groups[sup].push({ ...item, _originalIndex: idx })
  })
  return groups
}

function supplierList(order) {
  const sups = [...new Set(
    (order.items || []).map(x => x.supplier || x.supplierName || '').filter(Boolean)
  )]
  return sups.map(s => `<span style="
    background:#1e3a5f;color:#93c5fd;
    padding:2px 7px;border-radius:4px;
    font-size:11px;margin-right:4px
  ">${s}</span>`).join('')
}

function supReceivedBadge(lines) {
  const all  = lines.every(x => Number(x.receivedQty) >= Number(x.qty))
  const some = lines.some(x => Number(x.receivedQty) > 0)
  const hasQ = lines.some(x => x.lineStatus === 'Query')
  if (hasQ)  return ' ⚠️'
  if (all)   return ' ✅'
  if (some)  return ' 🔶'
  return ''
}

function whStatusBadge(order) {
  const st = order.warehouseStatus || calcWhStatus(order.items || [])
  const map = {
    'Received': ['green',  '#14532d','#86efac'],
    'Partial':  ['amber',  '#78350f','#fcd34d'],
    'Query':    ['purple', '#4c1d95','#c4b5fd'],
    'Open':     ['blue',   '#1e3a8a','#93c5fd'],
    'Packed':   ['green',  '#14532d','#86efac'],
  }
  const [, bg, color] = map[st] || map['Open']
  return `<span style="
    background:${bg};color:${color};
    padding:4px 10px;border-radius:20px;
    font-size:12px;font-weight:700
  ">${st}</span>`
}

function formatDims(p) {
  if (p.dimensions) return p.dimensions
  if (p.length && p.width && p.height) {
    return `${p.length}×${p.width}×${p.height} cm`
  }
  return '—'
}

function formatDateTime(value) {
  if (!value) return '—'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// ── DOM helpers ───────────────────────────────────────────────
function v(id) {
  const el = document.getElementById(id)
  return el ? el.value : ''
}
