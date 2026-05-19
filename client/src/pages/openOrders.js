// client/src/pages/openOrders.js
// OPEN ORDERS — updated to show warehouse status and supplier progress

import { db } from '../services/firebase.js'
import {
  collection,
  getDocs,
  doc,
  updateDoc
} from 'firebase/firestore'
import { notify } from '../services/notify.js'
import { renderOrderDetail } from './orderDetail.js'

let rows = []
let host = null

export async function renderOpenOrders(panel) {
  host  = panel
  rows  = await loadOrders()

  // Only show orders that are not yet invoiced
  const open = rows.filter(x => !x.invoiced)

  panel.innerHTML = `
    <h2 style="margin-bottom:16px">Open Orders</h2>

    <div class="grid-4" style="margin-bottom:16px">
      <input id="searchBox" placeholder="Search PO or customer…" />
      <select id="custFilter">
        <option value="">All customers</option>
        ${uniqueCustomers(open)}
      </select>
      <select id="statusFilter">
        <option value="">All statuses</option>
        <option>Open</option>
        <option>Partial</option>
        <option>Received</option>
        <option>Packed</option>
        <option>Shipped</option>
        <option>Query</option>
      </select>
      <div style="display:flex;gap:8px">
        <button id="reloadBtn">Reload</button>
        <button id="csvBtn">Weekly CSV</button>
      </div>
    </div>

    <div id="gridArea"></div>
  `

  draw(open)

  document.getElementById('reloadBtn').onclick = () => renderOpenOrders(panel)
  document.getElementById('csvBtn').onclick     = () => csvExport(open)
  document.getElementById('searchBox').oninput  = () => runFilter(open)
  document.getElementById('custFilter').onchange  = () => runFilter(open)
  document.getElementById('statusFilter').onchange = () => runFilter(open)
}

// ─────────────────────────────────────────────────────────────
// DRAW TABLE
// ─────────────────────────────────────────────────────────────
function draw(data) {
  const grid = document.getElementById('gridArea')
  if (!grid) return

  if (!data.length) {
    grid.innerHTML = `<div class="card">No open orders found.</div>`
    return
  }

  grid.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>PO</th>
          <th>Customer</th>
          <th>Buyer</th>
          <th>Due date</th>
          <th>Order status</th>
          <th>Warehouse</th>
          <th>Suppliers</th>
          <th>Customer status note</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${data.map(x => `
          <tr id="row-${x.id}">
            <td><strong>${x.poNumber || '—'}</strong></td>
            <td>${x.customerName || '—'}</td>
            <td>${x.buyerName || '—'}</td>
            <td>${x.dueDate || x.deliveryDate || '—'}</td>
            <td>${orderStatusBadge(x)}</td>
            <td>
              ${whStatusBadge(x)}
              ${whSupplierProgress(x)}
            </td>
            <td>${supplierList(x)}</td>
            <td>
              <div style="display:flex;flex-direction:column;gap:4px">
                ${x.warehouseSummary ? `
                  <div style="
                    font-size:11px;color:#9ca3af;
                    background:#111827;padding:4px 7px;
                    border-radius:4px;margin-bottom:4px;
                    border-left:2px solid #374151;
                  ">
                    <span style="color:#6b7280;font-size:10px">
                      Auto (warehouse):
                    </span><br>
                    ${x.warehouseSummary}
                  </div>
                ` : ''}
                <textarea
                  id="txt_${x.id}"
                  rows="2"
                  placeholder="Trader status note…"
                  style="font-size:12px"
                >${x.customerStatus || ''}</textarea>
              </div>
            </td>
            <td>
              <button
                class="saveBtn"
                data-id="${x.id}"
                style="white-space:nowrap"
              >
                Save note
              </button>
            </td>
            <td>
              <button
                class="viewBtn"
                data-id="${x.id}"
              >
                View
              </button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `

  document.querySelectorAll('.saveBtn').forEach(b =>
    b.onclick = () => saveNote(b.dataset.id)
  )
  document.querySelectorAll('.viewBtn').forEach(b =>
    b.onclick = () => renderOrderDetail(host, b.dataset.id)
  )
}

// ─────────────────────────────────────────────────────────────
// SAVE STATUS NOTE
// ─────────────────────────────────────────────────────────────
async function saveNote(id) {
  const el = document.getElementById(`txt_${id}`)
  if (!el) return
  await updateDoc(doc(db, 'orders', id), { customerStatus: el.value })
  notify('Status note saved', 'success')
}

// ─────────────────────────────────────────────────────────────
// CSV EXPORT — weekly status report
// ─────────────────────────────────────────────────────────────
function csvExport(data) {
  let csv = `Customer,PO,Buyer,Due Date,Order Status,Warehouse Status,Customer Status\n`

  data.forEach(x => {
    const whSt  = x.warehouseStatus || calcWhStatus(x.items || [])
    // Use trader note if set, otherwise auto status from warehouse
    const status = (document.getElementById(`txt_${x.id}`)?.value || x.customerStatus || x.warehouseSummary || '').trim()

    csv += [
      q(x.customerName),
      q(x.poNumber),
      q(x.buyerName),
      q(x.dueDate || x.deliveryDate),
      q(x.status || 'Open'),
      q(whSt),
      q(status)
    ].join(',') + '\n'
  })

  const blob = new Blob([csv], { type: 'text/csv' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url
  a.download = `weekly-status-${new Date().toISOString().split('T')[0]}.csv`
  a.click()
  URL.revokeObjectURL(url)
  notify('CSV exported', 'success')
}

// ─────────────────────────────────────────────────────────────
// FILTER
// ─────────────────────────────────────────────────────────────
function runFilter(allOpen) {
  const q  = (document.getElementById('searchBox')?.value || '').toLowerCase()
  const c  = document.getElementById('custFilter')?.value  || ''
  const st = document.getElementById('statusFilter')?.value || ''

  draw(allOpen.filter(x => {
    const text = `${x.poNumber} ${x.customerName}`.toLowerCase()
    const whSt = x.warehouseStatus || calcWhStatus(x.items || [])
    const matchQ  = !q  || text.includes(q)
    const matchC  = !c  || x.customerName === c
    const matchSt = !st || (x.status || 'Open') === st ||
                           whSt === st
    return matchQ && matchC && matchSt
  }))
}

// ─────────────────────────────────────────────────────────────
// DISPLAY HELPERS
// ─────────────────────────────────────────────────────────────
function orderStatusBadge(x) {
  const st = x.status || 'Open'
  const map = {
    'Open':     ['#1e3a8a','#93c5fd'],
    'Partial':  ['#78350f','#fcd34d'],
    'Received': ['#14532d','#86efac'],
    'Packed':   ['#14532d','#86efac'],
    'Shipped':  ['#312e81','#c4b5fd'],
    'Query':    ['#4c1d95','#f0abfc'],
    'Invoiced': ['#1f2937','#9ca3af'],
  }
  const [bg, color] = map[st] || map['Open']
  return `<span style="background:${bg};color:${color};
    padding:3px 9px;border-radius:20px;font-size:11px;font-weight:700">${st}</span>`
}

function whStatusBadge(x) {
  const st = x.warehouseStatus || calcWhStatus(x.items || [])
  if (!st || st === 'Open') return ''
  const map = {
    'Received': ['#14532d','#86efac'],
    'Partial':  ['#78350f','#fcd34d'],
    'Query':    ['#4c1d95','#f0abfc'],
    'Packed':   ['#14532d','#86efac'],
  }
  const [bg, color] = map[st] || ['#1f2937','#9ca3af']
  return `<span style="background:${bg};color:${color};
    padding:2px 7px;border-radius:12px;font-size:10px;font-weight:700;
    display:inline-block;margin-bottom:4px">WH: ${st}</span>`
}

function whSupplierProgress(x) {
  const bySupplier = groupBySupplier(x.items || [])
  if (!Object.keys(bySupplier).length) return ''

  return Object.entries(bySupplier).map(([sup, lines]) => {
    const allIn  = lines.every(l => Number(l.receivedQty) >= Number(l.qty))
    const someIn = lines.some(l  => Number(l.receivedQty) > 0)
    const hasQ   = lines.some(l  => l.lineStatus === 'Query')
    const icon   = hasQ ? '⚠️' : allIn ? '✅' : someIn ? '🔶' : '⏳'
    return `<div style="font-size:11px;color:#9ca3af">${icon} ${sup}</div>`
  }).join('')
}

function supplierList(x) {
  const sups = [...new Set(
    (x.items || []).map(i => i.supplier || i.supplierName || '').filter(Boolean)
  )]
  return sups.map(s =>
    `<span style="background:#1e3a5f;color:#93c5fd;padding:1px 6px;
      border-radius:4px;font-size:11px;margin:1px;display:inline-block">${s}</span>`
  ).join('')
}

function calcWhStatus(items) {
  if (!items.length) return 'Open'
  if (items.some(x => x.lineStatus === 'Query'))  return 'Query'
  if (items.every(x => Number(x.receivedQty) >= Number(x.qty))) return 'Received'
  if (items.some(x  => Number(x.receivedQty) > 0)) return 'Partial'
  return 'Open'
}

function groupBySupplier(items) {
  return items.reduce((acc, x) => {
    const k = x.supplier || x.supplierName || 'Unknown'
    if (!acc[k]) acc[k] = []
    acc[k].push(x)
    return acc
  }, {})
}

function uniqueCustomers(data) {
  return [...new Set(data.map(x => x.customerName).filter(Boolean))]
    .sort()
    .map(c => `<option>${c}</option>`)
    .join('')
}

async function loadOrders() {
  const snap = await getDocs(collection(db, 'orders'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

function q(v) {
  return `"${String(v || '').replace(/"/g, '""')}"`
}
