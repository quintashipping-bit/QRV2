// client/src/pages/admin/customers.js
// CUSTOMERS PRO
// searchable + add client modal + multiple contacts

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

export async function renderCustomers(panel, modal) {
  const rows = await loadCustomers()

  window._customers = rows

  panel.innerHTML = `
    <h3>Customers Pro</h3>

    <div class="grid-4">

      <input
        id="searchBox"
        placeholder="Search customer..."
      />

      <button id="btnAdd">
        Add Client
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
          <th>Buyer</th>
          <th>Email</th>
          <th>Currency</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="custRows"></tbody>

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
          `${x.name} ${x.email}`
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

async function loadCustomers() {
  const snap =
    await getDocs(collection(db, 'customers'))

  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }))
}

function drawRows(rows) {
  document.getElementById('custRows')
    .innerHTML =
    rows.map(x => `
      <tr>

        <td>${x.name || ''}</td>

        <td>
          ${(x.buyers || [])
            .map(b => b.name)
            .join(', ')}
        </td>

        <td>
          ${(x.buyers || [])
            .map(b => b.email)
            .join(', ')}
        </td>

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
    window._customers.find(
      x => x.id === id
    )

  const modal =
    document.getElementById('modalArea')

  modal.innerHTML =
    formHtml(row)

  bindForm(id)
}

function formHtml(row = {}) {
  const buyers =
    row.buyers || [
      { name: '', email: '' }
    ]

  return `
    <div class="modal">

      <div class="modal-card">

        <h3>
          ${row.id ? 'Edit' : 'Add'}
          Customer
        </h3>

        <input
          id="cName"
          placeholder="Customer Name"
          value="${row.name || ''}"
        />

        <textarea
          id="cInv"
          rows="4"
          placeholder="Invoice Address"
        >${row.invoiceAddress || ''}</textarea>

        <textarea
          id="cShip"
          rows="4"
          placeholder="Shipping Address"
        >${row.shippingAddress || ''}</textarea>

        <div id="buyerArea">

          ${buyers.map((b, i) => `
            <div class="grid-2 buyerRow">

              <input
                class="buyerName"
                placeholder="Buyer Name"
                value="${b.name || ''}"
              />

              <input
                class="buyerEmail"
                placeholder="Buyer Email"
                value="${b.email || ''}"
              />

            </div>
          `).join('')}

        </div>

        <button id="addBuyer">
          + Add Contact
        </button>

        <br><br>

        <select id="cCur">
          ${currencyOpt(
            row.currency || 'GBP'
          )}
        </select>

        <br><br>

        <button id="saveCust">
          Save
        </button>

        <button id="closeCust">
          Cancel
        </button>

      </div>

    </div>
  `
}

function bindForm(id = null) {
  document.getElementById('closeCust').onclick =
    () =>
      document.getElementById(
        'modalArea'
      ).innerHTML = ''

  document.getElementById('addBuyer').onclick =
    () => {
      document
        .getElementById('buyerArea')
        .insertAdjacentHTML(
          'beforeend',
          `
          <div class="grid-2 buyerRow">

            <input
              class="buyerName"
              placeholder="Buyer Name"
            />

            <input
              class="buyerEmail"
              placeholder="Buyer Email"
            />

          </div>
        `
        )
    }

  document.getElementById('saveCust').onclick =
    () => saveCustomer(id)
}

async function saveCustomer(id = null) {
  const name =
    document.getElementById('cName').value

  if (!name) {
    notify(
      'Enter customer name',
      'error'
    )
    return
  }

  const names =
    document.querySelectorAll('.buyerName')

  const emails =
    document.querySelectorAll('.buyerEmail')

  const buyers = []

  names.forEach((n, i) => {
    if (n.value.trim()) {
      buyers.push({
        name: n.value,
        email:
          emails[i]?.value || ''
      })
    }
  })

  const data = {
    name,
    invoiceAddress:
      document.getElementById(
        'cInv'
      ).value,
    shippingAddress:
      document.getElementById(
        'cShip'
      ).value,
    buyers,
    currency:
      document.getElementById(
        'cCur'
      ).value
  }

  const docId =
    id || name

  await setDoc(
    doc(
      db,
      'customers',
      docId
    ),
    data,
    { merge: true }
  )

  notify(
    'Customer saved',
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

function downloadCsv() {
  const rows =
    window._customers || []

  let csv =
`name,invoiceAddress,shippingAddress,buyers,currency
`

  rows.forEach(x => {
    csv += [
      x.name,
      x.invoiceAddress,
      x.shippingAddress,
      (x.buyers || [])
        .map(b =>
          `${b.name}:${b.email}`
        )
        .join('|'),
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
    'customers.csv'

  a.click()

  notify(
    'CSV downloaded',
    'info'
  )
}