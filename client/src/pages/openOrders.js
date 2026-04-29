// client/src/pages/openOrders.js
// FULL SCRIPT REWRITE
// Includes Due Date column + CSV export + working View

import { db } from '../services/firebase.js'

import {
  collection,
  getDocs,
  doc,
  updateDoc
} from 'firebase/firestore'

import { notify } from '../services/notify.js'

import {
  renderOrderDetail
} from './orderDetail.js'

let rows = []
let host = null

export async function renderOpenOrders(panel) {

  host = panel
  rows = await loadOrders()

  panel.innerHTML = `
    <h2>Open Orders</h2>

    <div class="grid-4">

      <input
        id="searchBox"
        placeholder="Search"
      />

      <select id="custFilter">
        <option value="">
          All Customers
        </option>
        ${customers()}
      </select>

      <button id="reloadBtn">
        Reload
      </button>

      <button id="csvBtn">
        Weekly CSV
      </button>

    </div>

    <br>

    <div id="gridArea"></div>
  `

  draw(rows)

  document.getElementById(
    'reloadBtn'
  ).onclick =
    () => renderOpenOrders(panel)

  document.getElementById(
    'csvBtn'
  ).onclick =
    csvExport

  document.getElementById(
    'searchBox'
  ).oninput =
    runFilter

  document.getElementById(
    'custFilter'
  ).onchange =
    runFilter
}

async function loadOrders() {

  const snap =
    await getDocs(
      collection(db,'orders')
    )

  return snap.docs.map(d => ({
    id:d.id,
    ...d.data()
  }))
}

function draw(data) {

  document.getElementById(
    'gridArea'
  ).innerHTML = `
    <table class="table">

      <thead>
        <tr>
          <th>PO</th>
          <th>Customer</th>
          <th>Buyer</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Update</th>
          <th>Save</th>
          <th>View</th>
        </tr>
      </thead>

      <tbody>

        ${data.map(x => `
          <tr>

            <td>${x.poNumber || ''}</td>
            <td>${x.customerName || ''}</td>
            <td>${x.buyerName || ''}</td>
            <td>${x.dueDate || '-'}</td>
            <td>${x.status || 'Open'}</td>

            <td>
              <textarea
                id="txt_${x.id}"
              >${x.customerStatus || ''}</textarea>
            </td>

            <td>
              <button
                class="saveBtn"
                data-id="${x.id}"
              >
                Save
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

  document
    .querySelectorAll('.saveBtn')
    .forEach(b =>
      b.onclick = () =>
        saveUpdate(
          b.dataset.id
        )
    )

  document
    .querySelectorAll('.viewBtn')
    .forEach(b =>
      b.onclick = () =>
        renderOrderDetail(
          host,
          b.dataset.id
        )
    )
}

async function saveUpdate(id) {

  const v =
    document.getElementById(
      `txt_${id}`
    ).value

  await updateDoc(
    doc(db,'orders',id),
    {
      customerStatus:v
    }
  )

  notify(
    'Saved',
    'success'
  )
}

function csvExport() {

  let csv =
`Customer,PO,Buyer,Due Date,Status,Update
`

  rows.forEach(x => {

    csv += [
      q(x.customerName),
      q(x.poNumber),
      q(x.buyerName),
      q(x.dueDate),
      q(x.status),
      q(x.customerStatus)
    ].join(',')

    csv += '\n'
  })

  const blob =
    new Blob(
      [csv],
      { type:'text/csv' }
    )

  const url =
    URL.createObjectURL(blob)

  const a =
    document.createElement('a')

  a.href = url
  a.download =
    'weekly-status-report.csv'

  a.click()

  URL.revokeObjectURL(url)
}

function runFilter() {

  const qv =
    txt(
      document.getElementById(
        'searchBox'
      ).value
    )

  const c =
    document.getElementById(
      'custFilter'
    ).value

  draw(
    rows.filter(x => {

      const hit =
        txt(x.poNumber)
        .includes(qv) ||

        txt(x.customerName)
        .includes(qv)

      const ok =
        !c ||
        x.customerName === c

      return hit && ok
    })
  )
}

function customers() {

  return [...new Set(
    rows.map(x =>
      x.customerName
    )
  )]
  .filter(Boolean)
  .sort()
  .map(x => `
    <option>${x}</option>
  `).join('')
}

function q(v) {
  return `"${String(v || '')
    .replace(/"/g,'""')}"`
}

function txt(v) {
  return String(v || '')
    .toLowerCase()
}