// client/src/pages/analytics.js
// ANALYTICS — full implementation
// Reads live data from orders + invoices collections
// Shows: revenue, margin, FX variance, supplier performance,
//        order cycle times, outstanding by customer

import { db } from '../services/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

export async function renderAnalytics(container) {
  container.innerHTML = `
    <h2 style="margin-bottom:16px">Analytics</h2>
    <div style="color:#9ca3af;font-size:13px;margin-bottom:16px">Loading…</div>
  `

  const [orders, invoices] = await Promise.all([
    load('orders'),
    load('invoices')
  ])

  const now    = new Date()
  const m1     = new Date(now.getFullYear(), now.getMonth(), 1)
  const m3     = new Date(now.getFullYear(), now.getMonth() - 2, 1)

  const thisMonth = invoices.filter(x => toDate(x.invoiceDate) >= m1)
  const quarter   = invoices.filter(x => toDate(x.invoiceDate) >= m3)

  // ── KPIs ──────────────────────────────────────────────────
  const rev   = sum(thisMonth, 'value')
  const qRev  = sum(quarter,   'value')
  const open  = orders.filter(x => !x.invoiced)
  const query = orders.filter(x => x.warehouseStatus === 'Query')

  // FX variance: sum across all invoices this month
  const fxVar = thisMonth.reduce((s, inv) => {
    const items = inv.items || []
    return s + items.reduce((ss, l) => ss + Number(l.fxVarianceGbp || 0), 0)
  }, 0)

  // Margin: for invoices that have items with margin data
  const margin = thisMonth.reduce((s, inv) => {
    const items = inv.items || []
    const invRev  = items.reduce((a, l) => a + l.qty * l.unitPrice, 0)
    const invCost = items.reduce((a, l) => a + Number(l.actualCostGbp || 0), 0)
    return s + (invRev - invCost)
  }, 0)

  const marginPct = rev > 0 ? (margin / rev * 100).toFixed(1) : '—'

  // ── Supplier breakdown ────────────────────────────────────
  const supMap = {}
  orders.forEach(o => {
    (o.items || []).forEach(item => {
      const sup = item.supplier || item.supplierName || 'Unknown'
      if (!supMap[sup]) supMap[sup] = { orders: 0, lines: 0, short: 0, query: 0 }
      supMap[sup].orders++
      supMap[sup].lines++
      if (Number(item.receivedQty || 0) < Number(item.qty || 0)) supMap[sup].short++
      if (item.lineStatus === 'Query') supMap[sup].query++
    })
  })

  // ── Customer outstanding ─────────────────────────────────
  const custMap = {}
  open.forEach(o => {
    const c = o.customerName || 'Unknown'
    if (!custMap[c]) custMap[c] = { count: 0, value: 0 }
    custMap[c].count++
    custMap[c].value += invoiceValue(o)
  })

  // ── Average cycle time ────────────────────────────────────
  const cycleOrders = orders.filter(x => x.dispatchDate && x.poDate)
  const avgCycle = cycleOrders.length
    ? cycleOrders.reduce((s, o) => {
        return s + daysBetween(o.poDate, o.dispatchDate)
      }, 0) / cycleOrders.length
    : null

  // ── RENDER ────────────────────────────────────────────────
  container.innerHTML = `
    <h2 style="margin-bottom:6px">Analytics</h2>
    <p style="color:#9ca3af;font-size:12px;margin-bottom:16px">
      This month / all open orders
    </p>

    <!-- KPI cards -->
    <div class="grid-4" style="margin-bottom:20px">
      <div class="card" style="text-align:center">
        <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;
                    letter-spacing:.05em;margin-bottom:6px">Revenue (this month)</div>
        <div style="font-size:26px;font-weight:700;color:#86efac">
          £${rev.toLocaleString('en-GB', {minimumFractionDigits:2,maximumFractionDigits:2})}
        </div>
        <div style="font-size:11px;color:#9ca3af;margin-top:4px">
          ${thisMonth.length} invoice(s)
        </div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;
                    letter-spacing:.05em;margin-bottom:6px">Margin (this month)</div>
        <div style="font-size:26px;font-weight:700;color:${margin >= 0 ? '#86efac' : '#f87171'}">
          £${Math.abs(margin).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2})}
        </div>
        <div style="font-size:11px;color:#9ca3af;margin-top:4px">
          ${marginPct !== '—' ? marginPct + '%' : '—'}
        </div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;
                    letter-spacing:.05em;margin-bottom:6px">FX variance (month)</div>
        <div style="font-size:26px;font-weight:700;color:${fxVar >= 0 ? '#86efac' : '#f87171'}">
          ${fxVar >= 0 ? '+' : '-'}£${Math.abs(fxVar).toFixed(2)}
        </div>
        <div style="font-size:11px;color:#9ca3af;margin-top:4px">
          vs PO-date rates
        </div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;
                    letter-spacing:.05em;margin-bottom:6px">Open orders</div>
        <div style="font-size:26px;font-weight:700">${open.length}</div>
        <div style="font-size:11px;margin-top:4px">
          ${query.length > 0
            ? `<span style="color:#f87171">${query.length} on query</span>`
            : '<span style="color:#86efac">None on query</span>'}
        </div>
      </div>
    </div>

    <div class="grid-3" style="margin-bottom:20px">

      <!-- Quarterly revenue -->
      <div class="card">
        <h4 style="margin-bottom:12px;font-size:13px;color:#9ca3af;
                   text-transform:uppercase;letter-spacing:.05em">
          Quarter revenue
        </h4>
        <div style="font-size:22px;font-weight:700">
          £${qRev.toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2})}
        </div>
        <div style="font-size:12px;color:#9ca3af;margin-top:4px">
          ${quarter.length} invoices over 3 months
        </div>
        ${avgCycle !== null ? `
          <div style="margin-top:12px;padding-top:12px;border-top:1px solid #1f2c44;
                      font-size:12px;color:#9ca3af">
            Avg. order cycle:
            <strong style="color:#e8eaf0">${avgCycle.toFixed(1)} days</strong>
            (PO to despatch)
          </div>` : ''}
      </div>

      <!-- Outstanding by customer -->
      <div class="card">
        <h4 style="margin-bottom:12px;font-size:13px;color:#9ca3af;
                   text-transform:uppercase;letter-spacing:.05em">
          Outstanding by customer
        </h4>
        ${Object.keys(custMap).length
          ? Object.entries(custMap)
              .sort((a, b) => b[1].value - a[1].value)
              .map(([cust, d]) => `
                <div style="display:flex;justify-content:space-between;
                            padding:6px 0;border-bottom:1px solid #1f2c44;
                            font-size:13px">
                  <span>${cust}</span>
                  <span>
                    <strong>
                      £${d.value.toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2})}
                    </strong>
                    <span style="color:#9ca3af;font-size:11px;margin-left:6px">
                      ${d.count} order(s)
                    </span>
                  </span>
                </div>
              `).join('')
          : '<div style="color:#9ca3af;font-size:13px">No open orders</div>'}
      </div>

      <!-- Supplier delivery performance -->
      <div class="card">
        <h4 style="margin-bottom:12px;font-size:13px;color:#9ca3af;
                   text-transform:uppercase;letter-spacing:.05em">
          Supplier performance
        </h4>
        ${Object.keys(supMap).length
          ? Object.entries(supMap)
              .sort((a, b) => b[1].lines - a[1].lines)
              .map(([sup, d]) => {
                const shortPct = d.lines > 0
                  ? ((d.short / d.lines) * 100).toFixed(0)
                  : 0
                const ok = shortPct < 5
                return `
                  <div style="margin-bottom:10px">
                    <div style="display:flex;justify-content:space-between;
                                font-size:12px;margin-bottom:3px">
                      <span>${sup}</span>
                      <span style="color:${ok ? '#86efac' : '#f87171'}">
                        ${shortPct}% short deliveries
                        ${d.query > 0 ? `<span style="color:#f0abfc"> | ${d.query} query</span>` : ''}
                      </span>
                    </div>
                    <div style="background:#111827;border-radius:4px;height:6px;overflow:hidden">
                      <div style="
                        width:${Math.min(100, 100 - shortPct)}%;
                        height:100%;
                        background:${ok ? '#059669' : '#dc2626'};
                        border-radius:4px
                      "></div>
                    </div>
                    <div style="font-size:11px;color:#6b7280;margin-top:2px">
                      ${d.lines} line(s) across ${d.orders} order(s)
                    </div>
                  </div>
                `
              }).join('')
          : '<div style="color:#9ca3af;font-size:13px">No data yet</div>'}
      </div>
    </div>

    <!-- Monthly revenue bar chart (simple CSS bars) -->
    <div class="card" style="margin-bottom:16px">
      <h4 style="margin-bottom:14px;font-size:13px;color:#9ca3af;
                 text-transform:uppercase;letter-spacing:.05em">
        Monthly revenue — last 6 months
      </h4>
      ${buildBarChart(invoices, 6)}
    </div>

    <!-- Recent invoices -->
    <div class="card">
      <h4 style="margin-bottom:12px;font-size:13px;color:#9ca3af;
                 text-transform:uppercase;letter-spacing:.05em">
        Recent invoices
      </h4>
      ${invoices.length
        ? `<table class="table">
             <thead>
               <tr>
                 <th>Invoice no.</th>
                 <th>PO</th>
                 <th>Customer</th>
                 <th>Date</th>
                 <th>Value</th>
                 <th>Paid</th>
               </tr>
             </thead>
             <tbody>
               ${invoices
                 .sort((a, b) => (b.invoiceDate || '').localeCompare(a.invoiceDate || ''))
                 .slice(0, 15)
                 .map(x => `
                   <tr>
                     <td><strong>${x.invoiceNo || '—'}</strong></td>
                     <td>${x.poNumber || '—'}</td>
                     <td>${x.customerName || '—'}</td>
                     <td>${x.invoiceDate || '—'}</td>
                     <td>£${Number(x.value || 0).toFixed(2)}</td>
                     <td>${x.paid
                       ? '<span style="color:#86efac;font-weight:700">✓ Paid</span>'
                       : '<span style="color:#9ca3af">Outstanding</span>'}</td>
                   </tr>
                 `).join('')}
             </tbody>
           </table>`
        : '<div style="color:#9ca3af;font-size:13px">No invoices yet.</div>'}
    </div>
  `
}

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function buildBarChart(invoices, months) {
  const buckets = []
  const now     = new Date()

  for (let i = months - 1; i >= 0; i--) {
    const d     = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const label = d.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' })
    const total = invoices.filter(x => {
      const dd = toDate(x.invoiceDate)
      return dd && dd.getMonth() === d.getMonth() && dd.getFullYear() === d.getFullYear()
    }).reduce((s, x) => s + Number(x.value || 0), 0)
    buckets.push({ label, total })
  }

  const maxVal = Math.max(...buckets.map(b => b.total), 1)

  return `
    <div style="display:flex;align-items:flex-end;gap:8px;height:120px">
      ${buckets.map(b => {
        const h = Math.round((b.total / maxVal) * 100)
        return `
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px">
            <div style="font-size:10px;color:#9ca3af">
              ${b.total > 0 ? '£' + (b.total / 1000).toFixed(0) + 'k' : ''}
            </div>
            <div style="
              width:100%;height:${h}px;
              background:${h > 0 ? '#C4006A' : '#1f2c44'};
              border-radius:3px 3px 0 0;
              min-height:4px;
              transition:height .3s
            "></div>
            <div style="font-size:11px;color:#9ca3af">${b.label}</div>
          </div>
        `
      }).join('')}
    </div>
  `
}

async function load(col) {
  const snap = await getDocs(collection(db, col))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

function sum(arr, field) {
  return arr.reduce((s, x) => s + Number(x[field] || 0), 0)
}

function invoiceValue(order) {
  return (order.items || [])
    .filter(x => Number(x.receivedQty) > 0)
    .reduce((s, x) =>
      s + Number(x.receivedQty) * Number(x.sell || x.salePrice || 0), 0)
}

function toDate(str) {
  if (!str) return null
  const d = new Date(str)
  return isNaN(d) ? null : d
}

function daysBetween(a, b) {
  const d1 = new Date(a), d2 = new Date(b)
  return Math.abs((d2 - d1) / 86400000)
}
