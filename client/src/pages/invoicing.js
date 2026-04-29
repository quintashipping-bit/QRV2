// client/src/pages/invoicing.js
// INVOICING PRO V2 FINANCE FIELDS

import { db } from '../services/firebase.js'

import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc
} from 'firebase/firestore'

import {
  notify
} from '../services/notify.js'

export async function renderInvoicing(panel) {
  const rows =
    await loadOrders()

  const ready =
    rows.filter(
      x =>
        x.dispatchDate &&
        !x.invoiced
    )

  panel.innerHTML = `
    <h2>Invoicing Pro</h2>

    <div class="grid-3">

      <div class="metricCard">
        Ready:
        ${ready.length}
      </div>

      <button id="reloadInv">
        Reload
      </button>

      <input
        id="searchInv"
        placeholder="Search..."
      />

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>PO</th>
          <th>Customer</th>
          <th>Dispatch</th>
          <th>Currency</th>
          <th>Value</th>
          <th>Create</th>
        </tr>
      </thead>

      <tbody id="invRows">

        ${ready.map(
          rowHtml
        ).join('')}

      </tbody>

    </table>

    <br>

    <div id="preview"></div>
  `

  document.getElementById(
    'reloadInv'
  ).onclick =
    () =>
      renderInvoicing(panel)

  document.getElementById(
    'searchInv'
  ).oninput =
    filterRows
}

async function loadOrders() {
  const snap =
    await getDocs(
      collection(
        db,
        'orders'
      )
    )

  return snap.docs.map(d => ({
    id:d.id,
    ...d.data()
  }))
}

function rowHtml(x) {
  return `
    <tr>

      <td>
        ${x.poNumber || ''}
      </td>

      <td>
        ${x.customerName || ''}
      </td>

      <td>
        ${x.dispatchDate || ''}
      </td>

      <td>
        ${x.currency || 'GBP'}
      </td>

      <td>
        ${calcValue(x)}
      </td>

      <td>
        <button
          onclick="window.makeInv('${x.id}')"
        >
          Create
        </button>
      </td>

    </tr>
  `
}

function calcValue(x) {
  if (
    Array.isArray(
      x.items
    )
  ) {
    let t = 0

    x.items.forEach(r => {
      t +=
        Number(
          r.qty || 0
        ) *
        Number(
          r.sell || 0
        )
    })

    return t.toFixed(2)
  }

  return (
    Number(
      x.qty || 1
    ) *
    Number(
      x.sell || 0
    )
  ).toFixed(2)
}

window.makeInv =
async id => {

  const rows =
    await loadOrders()

  const o =
    rows.find(
      x =>
        x.id === id
    )

  if (!o) return

  const invNo =
    buildInvNo()

  const todayDate =
    today()

  const dueDate =
    plus30()

  const value =
    calcValue(o)

  await addDoc(
    collection(
      db,
      'invoices'
    ),
    {
      invoiceNo:
        invNo,
      orderId:id,
      poNumber:
        o.poNumber || '',
      customerName:
        o.customerName || '',
      invoiceDate:
        todayDate,
      dueDate:
        dueDate,
      currency:
        o.currency || 'GBP',
      value:
        Number(value),
      paid:false
    }
  )

  await updateDoc(
    doc(
      db,
      'orders',
      id
    ),
    {
      invoiced:true,
      invoiceNo:
        invNo,
      invoiceDate:
        todayDate,
      dueDate:
        dueDate,
      invoiceValue:
        Number(value),
      paid:false
    }
  )

  showPreview(
    o,
    invNo,
    todayDate,
    dueDate,
    value
  )

  notify(
    'Invoice Created',
    'success'
  )
}

function showPreview(
  o,
  invNo,
  dt,
  due,
  val
) {
  document.getElementById(
    'preview'
  ).innerHTML = `
    <div class="card">

      <h3>
        Invoice Preview
      </h3>

      <p>
        Invoice No:
        ${invNo}
      </p>

      <p>
        Customer:
        ${o.customerName || ''}
      </p>

      <p>
        PO:
        ${o.poNumber || ''}
      </p>

      <p>
        Invoice Date:
        ${dt}
      </p>

      <p>
        Due Date:
        ${due}
      </p>

      <p>
        Total:
        ${o.currency || 'GBP'}
        ${val}
      </p>

      <button
        onclick="window.print()"
      >
        Print PDF
      </button>

    </div>
  `
}

function buildInvNo() {
  const d =
    new Date()

  return (
    'INV-' +
    d.getFullYear() +
    pad(
      d.getMonth()+1
    ) +
    pad(
      d.getDate()
    ) +
    '-' +
    d.getTime()
      .toString()
      .slice(-4)
  )
}

function pad(n) {
  return String(n)
    .padStart(2,'0')
}

function today() {
  return new Date()
    .toISOString()
    .split('T')[0]
}

function plus30() {
  const d =
    new Date()

  d.setDate(
    d.getDate()+30
  )

  return d
    .toISOString()
    .split('T')[0]
}

function filterRows(e) {
  const q =
    e.target.value
    .toUpperCase()

  document
    .querySelectorAll(
      '#invRows tr'
    )
    .forEach(r => {

      r.style.display =
        r.innerText
        .toUpperCase()
        .includes(q)
        ? ''
        : 'none'
    })
}