// client/src/pages/invoicing.js
// INVOICING — updated to use receivedQty (not ordered qty)
// Generates a proper printable invoice with QR letterhead
// Only shows orders with dispatchDate set and not yet invoiced

import { db } from '../services/firebase.js'
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc
} from 'firebase/firestore'
import { notify } from '../services/notify.js'

const COMPANY = {
  name:     'Quinta Raddison Ltd',
  address:  'Stour House, High Lift Road, Langham, Colchester, Essex CO4 5TD',
  reg:      '1566906',
  vat:      'GB368541428',
  email:    'sales@qrltd.co.uk',
  tel:      '+44 1206 323 255',
  bank:     'Barclays Bank PLC',
  sort:     '20-00-00',
  account:  '12345678',
  iban:     'GB00 BARC 2000 0012 3456 78',
  swift:    'BARCGB22'
}

export async function renderInvoicing(panel) {
  const rows  = await loadOrders()
  const ready = rows.filter(x => x.dispatchDate && !x.invoiced)
  const done  = rows.filter(x => x.invoiced).sort((a, b) =>
    (b.invoiceDate || '').localeCompare(a.invoiceDate || '')
  )

  panel.innerHTML = `
    <h2 style="margin-bottom:16px">Invoicing</h2>

    <div class="grid-3" style="margin-bottom:16px">
      <div class="card" style="text-align:center">
        <div style="font-size:28px;font-weight:700;color:#86efac">${ready.length}</div>
        <div style="font-size:13px;color:#9ca3af">Ready to invoice</div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:28px;font-weight:700">${done.length}</div>
        <div style="font-size:13px;color:#9ca3af">Invoiced</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="reloadInv" style="flex:1">Reload</button>
        <input id="searchInv" placeholder="Search…" style="flex:2" />
      </div>
    </div>

    <!-- ── READY TO INVOICE ── -->
    <div class="card" style="margin-bottom:20px">
      <h3 style="margin-bottom:12px">Ready to invoice</h3>

      ${!ready.length
        ? `<p style="color:#9ca3af;font-size:13px">
             No orders awaiting invoice. Orders appear here once
             despatch has been confirmed in the Shipping page.
           </p>`
        : `<table class="table">
             <thead>
               <tr>
                 <th>PO</th>
                 <th>Customer</th>
                 <th>Dispatch</th>
                 <th>Currency</th>
                 <th>Invoice value</th>
                 <th>Items</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               ${ready.map(x => `
                 <tr>
                   <td><strong>${x.poNumber || '—'}</strong></td>
                   <td>${x.customerName || '—'}</td>
                   <td>${x.dispatchDate || '—'}</td>
                   <td>${x.currency || 'GBP'}</td>
                   <td><strong>${calcValue(x)}</strong></td>
                   <td style="font-size:12px;color:#9ca3af">
                     ${(x.items || []).filter(i => Number(i.receivedQty) > 0).length} line(s)
                   </td>
                   <td>
                     <button onclick="window._makeInv('${x.id}')">
                       Create invoice
                     </button>
                   </td>
                 </tr>
               `).join('')}
             </tbody>
           </table>`
      }
    </div>

    <!-- ── INVOICED (ARCHIVE) ── -->
    <div class="card">
      <h3 style="margin-bottom:12px">Recent invoices</h3>
      ${!done.length
        ? `<p style="color:#9ca3af;font-size:13px">No invoices yet.</p>`
        : `<table class="table">
             <thead>
               <tr>
                 <th>Invoice no.</th>
                 <th>PO</th>
                 <th>Customer</th>
                 <th>Invoice date</th>
                 <th>Due date</th>
                 <th>Value</th>
                 <th>Currency</th>
                 <th>Paid</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               ${done.slice(0, 30).map(x => `
                 <tr>
                   <td><strong>${x.invoiceNo || '—'}</strong></td>
                   <td>${x.poNumber || '—'}</td>
                   <td>${x.customerName || '—'}</td>
                   <td>${x.invoiceDate || '—'}</td>
                   <td>${x.dueDate || '—'}</td>
                   <td>${x.invoiceValue?.toFixed(2) || '—'}</td>
                   <td>${x.currency || 'GBP'}</td>
                   <td>
                     ${x.paid
                       ? `<span style="color:#86efac;font-weight:700">✓ Paid</span>`
                       : `<button onclick="window._markPaid('${x.id}')"
                            style="background:#059669;font-size:11px;padding:3px 8px">
                            Mark paid
                          </button>`
                     }
                   </td>
                   <td>
                     <button onclick="window._reprint('${x.id}')"
                       style="font-size:11px;padding:3px 8px">
                       Reprint
                     </button>
                   </td>
                 </tr>
               `).join('')}
             </tbody>
           </table>`
      }
    </div>

    <!-- invoice print preview renders here -->
    <div id="inv-preview"></div>
  `

  document.getElementById('reloadInv').onclick = () => renderInvoicing(panel)

  document.getElementById('searchInv').oninput = e => {
    const q = e.target.value.toUpperCase()
    document.querySelectorAll('.table tbody tr').forEach(r => {
      r.style.display = r.innerText.toUpperCase().includes(q) ? '' : 'none'
    })
  }

  // ── wire globals ──
  window._makeInv = id => createInvoice(id, rows, panel)
  window._markPaid = async id => {
    await updateDoc(doc(db, 'orders', id), { paid: true })
    notify('Marked as paid', 'success')
    renderInvoicing(panel)
  }
  window._reprint = id => {
    const order = rows.find(x => x.id === id)
    if (order) printInvoice(order, order.invoiceNo, order.invoiceDate, order.dueDate)
  }
}

// ─────────────────────────────────────────────────────────────
// CREATE INVOICE
// ─────────────────────────────────────────────────────────────
async function createInvoice(id, rows, panel) {
  const order = rows.find(x => x.id === id)
  if (!order) { notify('Order not found', 'error'); return }

  const invNo    = buildInvNo()
  const invDate  = today()
  const dueDate  = plus30()
  const value    = Number(calcValue(order))

  // Save to invoices collection
  await addDoc(collection(db, 'invoices'), {
    invoiceNo:    invNo,
    orderId:      id,
    poNumber:     order.poNumber    || '',
    customerName: order.customerName || '',
    invoiceDate:  invDate,
    dueDate:      dueDate,
    currency:     order.currency    || 'GBP',
    value,
    paid:         false,
    items:        receivedLines(order)
  })

  // Mark order as invoiced
  await updateDoc(doc(db, 'orders', id), {
    invoiced:     true,
    invoiceNo:    invNo,
    invoiceDate:  invDate,
    dueDate:      dueDate,
    invoiceValue: value,
    paid:         false,
    customerStatus: `Invoice ${invNo} issued ${invDate}. Payment due ${dueDate}.`
  })

  notify('Invoice created', 'success')

  // Print
  printInvoice(order, invNo, invDate, dueDate)

  // Reload
  renderInvoicing(panel)
}

// ─────────────────────────────────────────────────────────────
// PRINT INVOICE
// ─────────────────────────────────────────────────────────────
function printInvoice(order, invNo, invDate, dueDate) {
  const lines  = receivedLines(order)
  const total  = lines.reduce((s, l) => s + l.lineTotal, 0)
  const depot  = order.dispatchDepot || 'Colchester, UK'

  const lineRows = lines.map(l => `
    <tr>
      <td>${l.partNumber || '—'}</td>
      <td>${l.stockCode  || '—'}</td>
      <td>${l.description}</td>
      <td style="text-align:right">${l.qty}</td>
      <td style="text-align:right">${l.unitPrice.toFixed(2)}</td>
      <td style="text-align:right"><strong>${l.lineTotal.toFixed(2)}</strong></td>
    </tr>
  `).join('')

  const html = `
    <style>
      body { font-family:Arial,sans-serif; color:#000; margin:28px; font-size:13px; }
      .lh { display:flex; justify-content:space-between; align-items:flex-end;
            border-bottom:3px solid #C4006A; padding-bottom:14px; margin-bottom:18px; }
      .brand .q { font-size:24px; font-weight:700; color:#C4006A; }
      .brand .r { font-size:24px; font-weight:700; color:#3AAA35; }
      .co { font-size:11px; color:#555; line-height:1.7; text-align:right; }
      .inv-title { font-size:22px; font-weight:700; color:#C4006A; margin-bottom:4px; }
      .inv-pill { display:inline-block; background:#C4006A; color:#fff;
                  padding:3px 14px; border-radius:3px; font-size:13px; font-weight:700; }
      .addr-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:18px; }
      .addr-box { border-left:3px solid #C4006A; padding:8px 12px;
                  background:#fff8fb; font-size:12px; line-height:1.7; }
      .addr-box.grn { border-left-color:#3AAA35; background:#f4fdf4; }
      .addr-box .lbl { font-size:10px; font-weight:700; color:#C4006A;
                       text-transform:uppercase; letter-spacing:.06em; margin-bottom:3px; }
      .addr-box.grn .lbl { color:#3AAA35; }
      .ref-strip { display:grid; grid-template-columns:repeat(3,1fr); gap:8px;
                   background:#fff8fb; border:1px solid #f8bbd0; padding:8px 12px;
                   border-radius:3px; margin-bottom:16px; font-size:12px; }
      .ref-strip .k { font-size:9px; font-weight:700; color:#C4006A;
                      text-transform:uppercase; letter-spacing:.04em; display:block; margin-bottom:2px; }
      table { width:100%; border-collapse:collapse; margin-bottom:14px; font-size:12px; }
      thead tr { background:#C4006A; color:#fff; }
      th { padding:7px 8px; text-align:left; font-size:10px; font-weight:700; letter-spacing:.03em; }
      td { padding:6px 8px; border-bottom:1px solid #eee; }
      tfoot td { border-top:2px solid #C4006A; font-weight:700; font-size:14px; color:#C4006A; }
      .bank { display:grid; grid-template-columns:1fr 1fr; gap:16px;
              background:#f9f9f9; border-radius:3px; padding:12px 14px; margin-bottom:14px; }
      .bank .bk { font-size:9px; font-weight:700; color:#C4006A; text-transform:uppercase;
                  letter-spacing:.04em; display:block; margin-bottom:3px; }
      .bank span { font-size:11px; line-height:1.8; }
      .sig-table { width:100%; margin-top:28px; }
      .sig-table td { padding:0 10px; vertical-align:bottom; }
      .sig-line { border-top:1px solid #000; margin-top:36px; padding-top:3px;
                  font-size:10px; color:#888; }
      .ft { border-top:2px solid #C4006A; padding-top:9px; margin-top:16px;
            display:flex; justify-content:space-between; font-size:10px; color:#888; }
      .exw { display:inline-block; background:#fff3e0; color:#e65100;
             border:1px solid #ffcc80; padding:2px 7px; border-radius:3px;
             font-size:10px; font-weight:700; }
    </style>

    <div class="lh">
      <div class="brand">
        <div class="q">Quinta</div>
        <div class="r">Raddison</div>
      </div>
      <div>
        <div class="inv-title">Invoice</div>
        <div class="inv-pill">${invNo}</div>
        <div style="font-size:11px;color:#666;margin-top:6px">
          Date: ${invDate}<br>
          Due: ${dueDate} (Net 30)
        </div>
      </div>
      <div class="co">
        ${COMPANY.name}<br>
        Stour House, High Lift Road<br>
        Langham, Colchester, Essex CO4 5TD<br>
        ${COMPANY.tel} | ${COMPANY.email}<br>
        Reg: ${COMPANY.reg} | VAT: ${COMPANY.vat}
      </div>
    </div>

    <div class="addr-grid">
      <div class="addr-box">
        <div class="lbl">Bill to</div>
        <strong>${order.customerName || '—'}</strong><br>
        ${(order.invoiceAddress || '').replace(/\n/g,'<br>')}
      </div>
      <div class="addr-box grn">
        <div class="lbl" style="color:#3AAA35">Delivered to</div>
        <strong>${order.customerName || '—'}</strong><br>
        ${(order.shippingAddress || '').replace(/\n/g,'<br>')}
      </div>
    </div>

    <div class="ref-strip">
      <div>
        <span class="k">Client PO</span>
        ${order.poNumber || '—'}
        <span style="display:inline-block;background:#e8f5e9;color:#2e7d32;
          border:1px solid #a5d6a7;padding:1px 7px;border-radius:3px;
          font-size:10px;font-weight:700;margin-left:4px">Fixed price</span>
      </div>
      <div><span class="k">Ship date</span>${order.dispatchDate || '—'}</div>
      <div>
        <span class="k">Incoterms</span>
        <span class="exw">EXW ${depot}</span>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Part no.</th>
          <th>Stock code</th>
          <th>Description</th>
          <th style="text-align:right">Qty</th>
          <th style="text-align:right">Unit price GBP</th>
          <th style="text-align:right">Total GBP</th>
        </tr>
      </thead>
      <tbody>${lineRows}</tbody>
      <tfoot>
        <tr>
          <td colspan="5" style="text-align:right">
            Total EX Works ${depot}
          </td>
          <td style="text-align:right">£${total.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>

    <div class="bank">
      <div>
        <span class="bk">Bank details</span>
        <span>
          ${COMPANY.bank}<br>
          Sort: ${COMPANY.sort} | Acc: ${COMPANY.account}<br>
          IBAN: ${COMPANY.iban}<br>
          SWIFT: ${COMPANY.swift}
        </span>
      </div>
      <div>
        <span class="bk">Payment reference &amp; notes</span>
        <span>
          Please quote: ${invNo}<br>
          ${lines.some(l => l.isPartial)
            ? `<em>Note: One or more lines are part-shipped.
                 Balance will be invoiced on despatch.</em>`
            : ''}
        </span>
      </div>
    </div>

    <table class="sig-table">
      <tr>
        <td style="width:33%"><div class="sig-line">Authorised signatory</div></td>
        <td style="width:33%"><div class="sig-line">Name &amp; position</div></td>
        <td style="width:33%"><div class="sig-line">Date: ${invDate}</div></td>
      </tr>
    </table>

    <div class="ft">
      <div>${COMPANY.name} — Reg. England &amp; Wales No. ${COMPANY.reg} | This is a VAT invoice. E&amp;OE.</div>
      <div>${invNo} | Page 1 of 1</div>
    </div>
  `

  const w = window.open('', '_blank')
  w.document.write(`<!DOCTYPE html><html><head><title>${invNo}</title></head>
    <body>${html}
    <script>window.onload=()=>window.print()<\/script>
    </body></html>`)
  w.document.close()
}

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

// Build line items from received quantities (not ordered)
function receivedLines(order) {
  return (order.items || [])
    .filter(x => Number(x.receivedQty) > 0)
    .map(x => {
      const qty       = Number(x.receivedQty)
      const unitPrice = Number(x.sell || x.salePrice || 0)
      return {
        partNumber:  x.partNumber  || '—',
        stockCode:   x.stockCode   || '—',
        description: x.description || '—',
        qty,
        unitPrice,
        lineTotal:   qty * unitPrice,
        isPartial:   qty < Number(x.qty || qty)
      }
    })
}

// Invoice value = sum of received lines at sell price
function calcValue(order) {
  return receivedLines(order)
    .reduce((s, l) => s + l.lineTotal, 0)
    .toFixed(2)
}

async function loadOrders() {
  const snap = await getDocs(collection(db, 'orders'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

function buildInvNo() {
  const d = new Date()
  return `INV-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${Date.now().toString().slice(-4)}`
}

function pad(n)  { return String(n).padStart(2, '0') }
function today() { return new Date().toISOString().split('T')[0] }
function plus30() {
  const d = new Date()
  d.setDate(d.getDate() + 30)
  return d.toISOString().split('T')[0]
}
