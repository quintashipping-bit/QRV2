// client/src/pages/admin/suppliers.js
// SUPPLIERS PRO
// searchable + add supplier modal + edit + csv

import { db } from '../../services/firebase.js'

import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc
} from 'firebase/firestore'

import {
  notify
} from '../../services/notify.js'

export async function renderSuppliers(panel, modal) {
  const rows = await loadSuppliers()

  window._suppliers = rows

  panel.innerHTML = `
    <h3>Suppliers Pro</h3>

    <div class="grid-4">

      <input
        id="searchBox"
        placeholder="Search supplier..."
      />

      <button id="btnAdd">
        Add Supplier
      </button>

      <button id="btnDownload">
        Download CSV
      </button>

      <span></span>

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Terms</th>
          <th>Currency</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="supRows"></tbody>

    </table>
  `

  drawRows(rows)

  document.getElementById('searchBox').oninput =
    () => {
      const q =
        document
          .getElementById('searchBox')
          .value
          .toLowerCase()

      const filtered =
        rows.filter(x =>
          `${x.name} ${x.contactName} ${x.contactEmail}`
          .toLowerCase()
          .includes(q)
        )

      drawRows(filtered)
    }

  document.getElementById('btnAdd').onclick =
    () => addModal(modal)

  document.getElementById('btnDownload').onclick =
    downloadCsv
}

async function loadSuppliers() {
  const snap =
    await getDocs(collection(db, 'suppliers'))

  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }))
}

function drawRows(rows) {
  document.getElementById('supRows')
    .innerHTML =
    rows.map(x => `
      <tr>

        <td>${x.name || ''}</td>

        <td>${x.contactName || ''}</td>

        <td>${x.contactEmail || ''}</td>

        <td>${x.shippingTerms || ''}</td>

        <td>${x.currency || ''}</td>

        <td>
          <button
            class="editBtn"
            data-id="${x.id}"
          >
            Edit
          </button>
        </td>

      </tr>
    `).join('')

  document.querySelectorAll('.editBtn')
    .forEach(btn => {
      btn.onclick =
        () =>
          editModal(
            btn.dataset.id
          )
    })
}

function addModal(modal) {
  modal.innerHTML = formHtml()

  bindForm()
}

function editModal(id) {
  const row =
    window._suppliers.find(
      x => x.id === id
    )

  const modal =
    document.getElementById('modalArea')

  modal.innerHTML =
    formHtml(row)

  bindForm(id)
}

function formHtml(row = {}) {
  return `
    <div class="modal">

      <div class="modal-card">

        <h3>
          ${row.id ? 'Edit' : 'Add'}
          Supplier
        </h3>

        <input
          id="sName"
          placeholder="Supplier Name"
          value="${row.name || ''}"
        />

        <textarea
          id="sAddress"
          rows="4"
          placeholder="Address"
        >${row.address || ''}</textarea>

        <input
          id="sContact"
          placeholder="Contact Name"
          value="${row.contactName || ''}"
        />

        <input
          id="sEmail"
          placeholder="Contact Email"
          value="${row.contactEmail || ''}"
        />

        <select id="sTerms">
          ${termsOpt(
            row.shippingTerms || 'FOB'
          )}
        </select>

        <br><br>

        <select id="sCur">
          ${currencyOpt(
            row.currency || 'USD'
          )}
        </select>

        <br><br>

        <button id="saveSup">
          Save
        </button>

        <button id="closeSup">
          Cancel
        </button>

      </div>

    </div>
  `
}

function bindForm(id = null) {
  document.getElementById('closeSup').onclick =
    () =>
      document.getElementById(
        'modalArea'
      ).innerHTML = ''

  document.getElementById('saveSup').onclick =
    () => saveSupplier(id)
}

async function saveSupplier(id = null) {
  const name =
    document.getElementById('sName').value

  if (!name) {
    notify(
      'Enter supplier name',
      'error'
    )
    return
  }

  const data = {
    name,
    address:
      document.getElementById(
        'sAddress'
      ).value,
    contactName:
      document.getElementById(
        'sContact'
      ).value,
    contactEmail:
      document.getElementById(
        'sEmail'
      ).value,
    shippingTerms:
      document.getElementById(
        'sTerms'
      ).value,
    currency:
      document.getElementById(
        'sCur'
      ).value
  }

  const docId =
    id || name

  await setDoc(
    doc(
      db,
      'suppliers',
      docId
    ),
    data,
    { merge: true }
  )

  notify(
    'Supplier saved',
    'success'
  )

  location.reload()
}

function currencyOpt(sel) {
  const list = [
    'GBP',
    'EUR',
    'USD',
    'JPY',
    'CNY'
  ]

  return list.map(x => `
    <option
      value="${x}"
      ${x === sel ? 'selected' : ''}
    >
      ${x}
    </option>
  `).join('')
}

function termsOpt(sel) {
  const list = [
    'EXW',
    'FCA',
    'FOB',
    'CIF',
    'DAP',
    'DDP',
    'COLLECTION'
  ]

  return list.map(x => `
    <option
      value="${x}"
      ${x === sel ? 'selected' : ''}
    >
      ${x}
    </option>
  `).join('')
}

function downloadCsv() {
  const rows =
    window._suppliers || []

  let csv =
`name,address,contactName,contactEmail,shippingTerms,currency
`

  rows.forEach(x => {
    csv += [
      x.name,
      x.address,
      x.contactName,
      x.contactEmail,
      x.shippingTerms,
      x.currency
    ].join(',') + '\n'
  })

  const blob =
    new Blob([csv], {
      type: 'text/csv'
    })

  const a =
    document.createElement('a')

  a.href =
    URL.createObjectURL(blob)

  a.download =
    'suppliers.csv'

  a.click()

  notify(
    'CSV downloaded',
    'info'
  )
}