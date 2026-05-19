// client/src/pages/shipping.js
// SHIPPING — updated to read warehouse packing structure
// Reads packingBySup + aggregated packing from warehouse
// Country of origin comes from warehouse line items (read-only here)
// Dispatch method: Courier or Ex-Works (collected by forwarder)
// Auto-updates customerStatus on Open Orders when confirmed

import { db } from '../services/firebase.js'
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc
} from 'firebase/firestore'
import { notify } from '../services/notify.js'

let allOrders = []
let current   = null

// User's depot — in a real build this comes from auth profile
const DEPOT = 'Colchester, UK'

// ─────────────────────────────────────────────────────────────
// ENTRY POINT
// ─────────────────────────────────────────────────────────────
export async function renderShipping(panel) {
  allOrders = await loadOrders()

  // Only show orders that are at least partially received at warehouse
  const ready = allOrders.filter(x =>
    x.warehouseStatus === 'Received' ||
    x.warehouseStatus === 'Partial'  ||
    x.warehouseStatus === 'Packed'   ||
    (x.items || []).some(i => Number(i.receivedQty) > 0)
  )

  panel.innerHTML = `
    <h2 style="margin-bottom:16px">Shipping</h2>

    <div class="card" style="margin-bottom:16px">
      <label style="font-size:13px;color:#9ca3af;display:block;margin-bottom:6px">
        Select order to despatch
      </label>
      <div style="display:flex;gap:10px">
        <select id="ship-sel" style="flex:1">
          <option value="">— Select order —</option>
          ${ready.map(x => `
            <option value="${x.id}">
              ${x.poNumber || x.id} — ${x.customerName || ''}
              ${x.warehouseStatus ? '(' + x.warehouseStatus + ')' : ''}
            </option>
          `).join('')}
        </select>
        <button id="ship-load-btn">Load order</button>
      </div>
      ${!ready.length ? `
        <p style="color:#9ca3af;font-size:12px;margin-top:8px">
          No orders are ready to ship. Goods must be received at warehouse first.
        </p>` : ''}
    </div>

    <div id="ship-detail"></div>
  `

  document.getElementById('ship-load-btn').onclick = async () => {
    const id = document.getElementById('ship-sel').value
    if (!id) { notify('Select an order first', 'warn'); return }
    const snap = await getDoc(doc(db, 'orders', id))
    if (!snap.exists()) { notify('Order not found', 'error'); return }
    current = { id: snap.id, ...snap.data() }
    drawDetail(panel)
  }
}

// ─────────────────────────────────────────────────────────────
// DETAIL VIEW
// ─────────────────────────────────────────────────────────────
function drawDetail(panel) {
  const detail = document.getElementById('ship-detail')
  const packing = current.packing || {}
  const packingBySup = current.packingBySup || {}

  // Build per-supplier packing summary
  const supPackingRows = Object.entries(packingBySup).map(([sup, p]) => `
    <tr>
      <td>${sup}</td>
      <td>${p.cartons || '—'}</td>
      <td>${p.totalWeight || '—'} kg</td>
      <td>${formatDims(p)}</td>
      <td>${p.bondLocation || '—'}</td>
    </tr>
  `).join('')

  // Items — only show received lines; qty = receivedQty
  const receivedItems = (current.items || []).filter(x => Number(x.receivedQty) > 0)

  detail.innerHTML = `
    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div>
          <strong style="font-size:16px">${current.poNumber || '—'}</strong>
          <span style="color:#9ca3af;margin-left:10px">${current.customerName || ''}</span>
        </div>
        <button onclick="renderShipping(document.getElementById('pageArea'))"
          style="background:#374151">
          ← Back
        </button>
      </div>

      <!-- ── PACKING SUMMARY FROM WAREHOUSE ── -->
      <h4 style="margin-bottom:10px;font-size:13px;text-transform:uppercase;
                 letter-spacing:.05em;color:#9ca3af">
        Packing — from warehouse
      </h4>

      ${Object.keys(packingBySup).length ? `
        <table class="table" style="margin-bottom:16px">
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Cartons</th>
              <th>Weight</th>
              <th>Dimensions</th>
              <th>Bond location</th>
            </tr>
          </thead>
          <tbody>${supPackingRows}</tbody>
          <tfoot>
            <tr style="font-weight:700;border-top:1px solid #374151">
              <td>TOTAL</td>
              <td>${packing.cartons || '—'}</td>
              <td>${packing.totalWeight || '—'} kg</td>
              <td>${packing.dimensions || '—'}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      ` : `
        <div style="color:#f59e0b;font-size:13px;margin-bottom:16px">
          ⚠ No packing information entered at warehouse yet.
          Weight and dimensions must be entered before generating documents.
        </div>
      `}

      <!-- ── LINE ITEMS (received only) ── -->
      <h4 style="margin-bottom:10px;font-size:13px;text-transform:uppercase;
                 letter-spacing:.05em;color:#9ca3af">
        Commercial lines — received goods
      </h4>

      <div style="overflow-x:auto">
        <table class="table" style="margin-bottom:16px">
          <thead>
            <tr>
              <th>Part no.</th>
              <th>Stock code</th>
              <th>Description</th>
              <th>Qty shipping</th>
              <th>HS code</th>
              <th>Country of origin</th>
              <th>Unit value</th>
              <th>Line total</th>
            </tr>
          </thead>
          <tbody>
            ${receivedItems.map((x, i) => `
              <tr>
                <td>${x.partNumber || '—'}</td>
                <td>${x.stockCode || '—'}</td>
                <td>${x.description || '—'}</td>
                <td>
                  <strong style="${
                    Number(x.receivedQty) < Number(x.qty)
                      ? 'color:#f59e0b'
                      : 'color:#86efac'
                  }">
                    ${x.receivedQty}
                    ${Number(x.receivedQty) < Number(x.qty)
                      ? `<span style="color:#9ca3af;font-size:11px">
                           of ${x.qty} — balance outstanding
                         </span>`
                      : ''}
                  </strong>
                </td>
                <td>
                  <input
                    id="hs-${i}"
                    value="${x.hsCode || ''}"
                    style="width:110px"
                    placeholder="HS code"
                  />
                </td>
                <td style="color:#86efac">
                  ${x.countryOfOrigin || '<span style="color:#f59e0b">Not set</span>'}
                </td>
                <td>${Number(x.sell || x.salePrice || 0).toFixed(2)}</td>
                <td>${(Number(x.receivedQty) * Number(x.sell || x.salePrice || 0)).toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="font-weight:700;border-top:1px solid #374151">
              <td colspan="7">Total EX Works ${DEPOT}</td>
              <td>${receivedItems.reduce((s, x) =>
                s + Number(x.receivedQty) * Number(x.sell || x.salePrice || 0), 0
              ).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- ── DESPATCH METHOD ── -->
      <h4 style="margin-bottom:10px;font-size:13px;text-transform:uppercase;
                 letter-spacing:.05em;color:#9ca3af">
        Despatch details
      </h4>

      <div class="grid-4" style="gap:12px;margin-bottom:14px">
        <div>
          <label style="font-size:12px;color:#9ca3af">Method</label>
          <select id="ship-type" onchange="window._shipMethodToggle()">
            <option value="Courier">Courier</option>
            <option value="Ex-Works">Collected by forwarder (Ex-Works)</option>
          </select>
        </div>
        <div id="courier-name-wrap">
          <label style="font-size:12px;color:#9ca3af">Courier company</label>
          <input id="ship-courier" placeholder="e.g. DHL Express" />
        </div>
        <div id="awb-wrap">
          <label style="font-size:12px;color:#9ca3af">AWB / tracking ref</label>
          <input id="ship-awb" placeholder="AWB or tracking number" />
        </div>
        <div>
          <label style="font-size:12px;color:#9ca3af">Despatch date</label>
          <input type="date" id="ship-date"
            value="${new Date().toISOString().split('T')[0]}" />
        </div>
      </div>

      <!-- ── DOCUMENT BUTTONS ── -->
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;
                  padding-bottom:16px;border-bottom:1px solid #1f2c44">
        <button id="btn-packing-list" onclick="window._shipPackingList()">
          📋 Packing list
        </button>
        <button id="btn-comm-inv" onclick="window._shipCommercialInvoice()">
          📄 Commercial invoice
        </button>
      </div>

      <!-- ── CONFIRM SHIPMENT ── -->
      <button id="btn-confirm-ship"
        style="background:#059669;font-size:14px;padding:10px 20px"
        onclick="window._shipConfirm()">
        ✅ Confirm shipment &amp; update status
      </button>
    </div>

    <!-- ── PRINT PREVIEW AREA ── -->
    <div id="ship-print-preview"></div>
  `

  // Wire up method toggle
  window._shipMethodToggle = () => {
    const method = document.getElementById('ship-type').value
    const isCourier = method === 'Courier'
    document.getElementById('courier-name-wrap').style.display = isCourier ? '' : 'none'
    document.getElementById('awb-wrap').style.display = isCourier ? '' : 'none'
  }

  // Wire up actions
  window._shipPackingList       = () => genPackingList()
  window._shipCommercialInvoice = () => genCommercialInvoice()
  window._shipConfirm           = () => confirmShipment()
}

// ─────────────────────────────────────────────────────────────
// GENERATE — PACKING LIST
// ─────────────────────────────────────────────────────────────
function genPackingList() {
  const packing      = current.packing || {}
  const packingBySup = current.packingBySup || {}
  const receivedItems = (current.items || []).filter(x => Number(x.receivedQty) > 0)

  // Collect updated HS codes from screen
  receivedItems.forEach((x, i) => {
    const hsEl = document.getElementById(`hs-${i}`)
    if (hsEl) x.hsCode = hsEl.value
  })

  const method  = gv('ship-type')
  const courier = gv('ship-courier')
  const awb     = gv('ship-awb')
  const date    = gv('ship-date')

  const methodLine = method === 'Courier'
    ? `Courier: ${courier || '—'} &nbsp;|&nbsp; AWB: ${awb || '—'}`
    : `Collected by client's forwarder (Ex-Works ${DEPOT})`

  const supRows = Object.entries(packingBySup).map(([sup, p]) => `
    <tr>
      <td>${sup}</td>
      <td>${p.cartons || '—'}</td>
      <td>${p.totalWeight || '—'} kg</td>
      <td>${formatDims(p)}</td>
    </tr>
  `).join('')

  const lineRows = receivedItems.map(x => `
    <tr>
      <td>${x.partNumber || '—'}</td>
      <td>${x.stockCode || '—'}</td>
      <td>${x.description || '—'}</td>
      <td>${x.hsCode || '—'}</td>
      <td>${x.countryOfOrigin || '—'}</td>
      <td>${x.receivedQty}</td>
    </tr>
  `).join('')

  const html = docWrapper('Packing List', `
    <table class="doc-hdr-table">
      <tr><td><strong>PL No:</strong></td><td>PL-${current.poNumber || current.id}</td></tr>
      <tr><td><strong>Date:</strong></td><td>${date}</td></tr>
      <tr><td><strong>Client PO:</strong></td><td>${current.poNumber || '—'}</td></tr>
      <tr><td><strong>Customer:</strong></td><td>${current.customerName || '—'}</td></tr>
      <tr><td><strong>Despatch from:</strong></td><td>${DEPOT}</td></tr>
      <tr><td><strong>Method:</strong></td><td>${methodLine}</td></tr>
    </table>
    <h3>Package details</h3>
    <table class="doc-table">
      <thead><tr><th>Supplier</th><th>Cartons</th><th>Weight</th><th>Dimensions</th></tr></thead>
      <tbody>${supRows}</tbody>
      <tfoot>
        <tr><td><strong>TOTAL</strong></td>
            <td><strong>${packing.cartons || '—'}</strong></td>
            <td><strong>${packing.totalWeight || '—'} kg</strong></td>
            <td></td></tr>
      </tfoot>
    </table>
    <h3>Line items</h3>
    <table class="doc-table">
      <thead><tr><th>Part no.</th><th>Stock code</th><th>Description</th>
                 <th>HS code</th><th>Country of origin</th><th>Qty</th></tr></thead>
      <tbody>${lineRows}</tbody>
    </table>
    <p style="margin-top:24px;font-size:12px;color:#555">
      I hereby certify this packing list is a true and accurate description
      of the goods shipped.
    </p>
    ${sigBlock()}
  `)

  openPrintWindow(`Packing List — ${current.poNumber}`, html)
  notify('Packing list opened for print', 'success')
}

// ─────────────────────────────────────────────────────────────
// GENERATE — COMMERCIAL INVOICE
// ─────────────────────────────────────────────────────────────
async function genCommercialInvoice() {
  const packing = current.packing || {}
  const receivedItems = (current.items || []).filter(x => Number(x.receivedQty) > 0)

  // Save updated HS codes back to Firestore
  const updatedItems = [...(current.items || [])]
  receivedItems.forEach((x, i) => {
    const hsEl = document.getElementById(`hs-${i}`)
    if (hsEl) {
      const origIdx = updatedItems.findIndex(u => u.stockCode === x.stockCode)
      if (origIdx >= 0) updatedItems[origIdx].hsCode = hsEl.value
    }
  })
  await updateDoc(doc(db, 'orders', current.id), { items: updatedItems })
  current.items = updatedItems

  const method  = gv('ship-type')
  const courier = gv('ship-courier')
  const awb     = gv('ship-awb')
  const date    = gv('ship-date')

  const methodLine = method === 'Courier'
    ? `Courier: ${courier || '—'} | AWB: ${awb || '—'}`
    : `Collected by client's forwarder (Ex-Works ${DEPOT})`

  const lineRows = receivedItems.map(x => `
    <tr>
      <td>${x.partNumber || '—'}</td>
      <td>${x.stockCode || '—'}</td>
      <td>${x.description || '—'}</td>
      <td>${x.hsCode || '—'}</td>
      <td>${x.countryOfOrigin || '—'}</td>
      <td>${x.receivedQty}</td>
      <td>${Number(x.sell || x.salePrice || 0).toFixed(2)}</td>
      <td>${(Number(x.receivedQty) * Number(x.sell || x.salePrice || 0)).toFixed(2)}</td>
    </tr>
  `).join('')

  const total = receivedItems.reduce((s, x) =>
    s + Number(x.receivedQty) * Number(x.sell || x.salePrice || 0), 0)

  const html = docWrapper('Commercial Invoice — For customs & export purposes', `
    <table class="doc-hdr-table">
      <tr><td><strong>Invoice No:</strong></td><td>SINV-${current.poNumber || current.id}</td></tr>
      <tr><td><strong>Date:</strong></td><td>${date}</td></tr>
      <tr><td><strong>Client PO:</strong></td><td>${current.poNumber || '—'}</td></tr>
      <tr><td><strong>Exporter:</strong></td><td>Quinta Raddison Ltd, Stour House, High Lift Road, Langham, Colchester, Essex CO4 5TD</td></tr>
      <tr><td><strong>Consignee:</strong></td><td>${current.customerName || '—'}</td></tr>
      <tr><td><strong>Despatch:</strong></td><td>${methodLine}</td></tr>
      <tr><td><strong>Incoterms:</strong></td><td>EXW ${DEPOT}</td></tr>
      <tr><td><strong>Packages:</strong></td>
          <td>${packing.cartons || '—'} carton(s) | ${packing.totalWeight || '—'} kg | ${packing.dimensions || '—'}</td></tr>
    </table>
    <h3>Goods description</h3>
    <table class="doc-table">
      <thead><tr><th>Part no.</th><th>Stock code</th><th>Description</th>
                 <th>HS code</th><th>Country of origin</th><th>Qty</th>
                 <th>Unit value GBP</th><th>Total GBP</th></tr></thead>
      <tbody>${lineRows}</tbody>
      <tfoot>
        <tr><td colspan="7" style="text-align:right"><strong>Total EXW ${DEPOT}</strong></td>
            <td><strong>£${total.toFixed(2)}</strong></td></tr>
      </tfoot>
    </table>
    <p style="margin-top:20px;font-size:12px;color:#555">
      We hereby certify that the information on this invoice is true and correct
      and that the contents of this shipment are as stated above.
      Goods are of the stated origin.
    </p>
    ${sigBlock()}
  `)

  // Update customer status on open orders to "packed, ready"
  const statusMsg =
    `Goods in our ${DEPOT} depot — ${packing.totalWeight || '?'} kg` +
    ` (${packing.dimensions || '?'}) — ${packing.cartons || '?'} carton(s) —` +
    ` goods ready for collection/shipment at ${DEPOT}.`

  await updateDoc(doc(db, 'orders', current.id), {
    customerStatus:  statusMsg,
    shippingStatus:  'Awaiting instructions',
    status:          'Packed'
  })

  openPrintWindow(`Commercial Invoice — ${current.poNumber}`, html)
  notify('Commercial invoice opened — customer status updated', 'success')
}

// ─────────────────────────────────────────────────────────────
// CONFIRM SHIPMENT
// ─────────────────────────────────────────────────────────────
async function confirmShipment() {
  const method  = gv('ship-type')
  const courier = gv('ship-courier')
  const awb     = gv('ship-awb')
  const date    = gv('ship-date') || new Date().toISOString().split('T')[0]

  let statusMsg = ''
  if (method === 'Courier') {
    statusMsg = `Goods shipped from ${DEPOT} depot via ${courier || 'courier'} — AWB: ${awb || '—'} — despatch date: ${date}.`
  } else {
    statusMsg = `Goods collected from our ${DEPOT} depot by client's forwarder on ${date}.`
  }

  await updateDoc(doc(db, 'orders', current.id), {
    customerStatus:  statusMsg,
    shippingStatus:  'Shipped',
    dispatchDate:    date,
    dispatchMethod:  method,
    courierName:     courier || null,
    awbRef:          awb || null,
    status:          'Shipped'
  })

  notify('Shipment confirmed — customer status updated', 'success')
  renderShipping(document.getElementById('pageArea'))
}

// ─────────────────────────────────────────────────────────────
// DOCUMENT HELPERS
// ─────────────────────────────────────────────────────────────
function docWrapper(title, body) {
  return `
    <style>
      body { font-family: Arial, sans-serif; color: #000; background: #fff; margin: 20px; }
      h2 { font-size: 20px; margin-bottom: 4px; }
      h3 { font-size: 14px; margin: 16px 0 8px; border-bottom: 1px solid #ccc; padding-bottom: 4px; }
      .doc-hdr-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 13px; }
      .doc-hdr-table td { padding: 4px 8px; }
      .doc-hdr-table td:first-child { width: 160px; color: #555; }
      .doc-table { width: 100%; border-collapse: collapse; font-size: 12px; }
      .doc-table th { background: #C4006A; color: #fff; padding: 7px 8px; text-align: left; }
      .doc-table td { padding: 6px 8px; border-bottom: 1px solid #eee; }
      .doc-table tfoot td { border-top: 2px solid #C4006A; padding-top: 8px; }
      .co-block { margin-top: 24px; font-size: 12px; }
      .sig-table { width: 100%; margin-top: 32px; border-collapse: collapse; }
      .sig-table td { width: 33%; padding: 0 10px; vertical-align: bottom; }
      .sig-line { border-top: 1px solid #000; margin-top: 40px; padding-top: 4px; font-size: 11px; color: #555; }
      .letterhead { border-bottom: 3px solid #C4006A; margin-bottom: 16px; padding-bottom: 12px;
                    display: flex; justify-content: space-between; align-items: flex-end; }
      .letterhead .co { font-size: 11px; color: #555; line-height: 1.6; }
    </style>
    <div class="letterhead">
      <div>
        <div style="font-size:22px;font-weight:700;color:#C4006A">Quinta</div>
        <div style="font-size:22px;font-weight:700;color:#3AAA35;margin-top:-6px">Raddison</div>
      </div>
      <div class="co">
        Quinta Raddison Ltd<br>
        Stour House, High Lift Road, Langham<br>
        Colchester, Essex CO4 5TD<br>
        Tel: +44 1206 323 255 | sales@qrltd.co.uk<br>
        Reg: 1566906 | VAT: GB368541428
      </div>
    </div>
    <h2>${title}</h2>
    ${body}
  `
}

function sigBlock() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
  return `
    <table class="sig-table">
      <tr>
        <td><div class="sig-line">Authorised signatory</div></td>
        <td><div class="sig-line">Name &amp; position</div></td>
        <td><div class="sig-line">Date: ${today}</div></td>
      </tr>
    </table>
  `
}

function openPrintWindow(title, bodyHtml) {
  const w = window.open('', '_blank')
  w.document.write(`<!DOCTYPE html><html><head><title>${title}</title></head>
    <body>${bodyHtml}
    <script>window.onload=()=>window.print()<\/script>
    </body></html>`)
  w.document.close()
}

// ─────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────
async function loadOrders() {
  const snap = await getDocs(collection(db, 'orders'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

function gv(id) {
  const el = document.getElementById(id)
  return el ? el.value : ''
}

function formatDims(p) {
  if (p.dimensions) return p.dimensions
  if (p.length && p.width && p.height) {
    return `${p.length}×${p.width}×${p.height} cm`
  }
  return '—'
}
