// client/src/pages/admin/products.js
// PRODUCTS PRO (modular version)
// search + inline edit + currency + csv upload/download

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

export async function renderProducts(panel, modal) {
  const rows = await loadProducts()

  window._products = rows

  panel.innerHTML = `
    <h3>Products Pro</h3>

    <div class="grid-4">

      <input
        id="searchBox"
        placeholder="Search code / part / desc"
      />

      <button id="btnAdd">
        Add Product
      </button>

      <button id="btnDownload">
        Download CSV
      </button>

      <label class="buttonLike">
        Upload CSV
        <input
          id="csvFile"
          type="file"
          accept=".csv"
          hidden
        />
      </label>

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Code</th>
          <th>Part No</th>
          <th>Description</th>
          <th>Cost</th>
          <th>Sale</th>
          <th>Currency</th>
          <th>Supplier</th>
          <th>Margin</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="productRows"></tbody>

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
          `${x.stockCode} ${x.partNumber} ${x.description} ${x.supplierName}`
          .toLowerCase()
          .includes(q)
        )

      drawRows(filtered)
    }

  document.getElementById('btnAdd').onclick =
    () => addModal(modal)

  document.getElementById('btnDownload').onclick =
    downloadCsv

  document.getElementById('csvFile').onchange =
    uploadCsv
}

async function loadProducts() {
  const snap =
    await getDocs(collection(db, 'items'))

  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }))
}

function drawRows(rows) {
  document.getElementById('productRows')
    .innerHTML =
    rows.map(x => {
      const cost =
        Number(x.costPrice || 0)

      const sale =
        Number(x.salePrice || 0)

      const margin =
        sale
          ? (
              ((sale - cost) / sale) * 100
            ).toFixed(1)
          : '0.0'

      return `
        <tr>

          <td>
            <input
              value="${x.stockCode || ''}"
              data-id="${x.id}"
              data-field="stockCode"
            />
          </td>

          <td>
            <input
              value="${x.partNumber || ''}"
              data-id="${x.id}"
              data-field="partNumber"
            />
          </td>

          <td>
            <input
              value="${x.description || ''}"
              data-id="${x.id}"
              data-field="description"
            />
          </td>

          <td>
            <input
              value="${cost}"
              data-id="${x.id}"
              data-field="costPrice"
            />
          </td>

          <td>
            <input
              value="${sale}"
              data-id="${x.id}"
              data-field="salePrice"
            />
          </td>

          <td>
            <select
              data-id="${x.id}"
              data-field="currency"
            >
              ${currencyOpt(
                x.currency || 'USD'
              )}
            </select>
          </td>

          <td>
            <input
              value="${x.supplierName || ''}"
              data-id="${x.id}"
              data-field="supplierName"
            />
          </td>

          <td>
            ${margin}%
          </td>

          <td>
            <button
              class="saveRow"
              data-id="${x.id}"
            >
              Save
            </button>
          </td>

        </tr>
      `
    }).join('')

  document.querySelectorAll('.saveRow')
    .forEach(btn => {
      btn.onclick =
        () =>
          saveRow(btn.dataset.id)
    })
}

async function saveRow(id) {
  const inputs =
    document.querySelectorAll(
      `[data-id="${id}"]`
    )

  const data = {}

  inputs.forEach(x => {
    data[x.dataset.field] = x.value
  })

  await updateDoc(
    doc(db, 'items', id),
    data
  )

  notify(
    'Product updated',
    'success'
  )
}

function addModal(modal) {
  modal.innerHTML = `
    <div class="modal">
      <div class="modal-card">

        <h3>Add Product</h3>

        <input id="nCode" placeholder="Code" />
        <input id="nPart" placeholder="Part No" />
        <input id="nDesc" placeholder="Description" />
        <input id="nCost" placeholder="Cost" />
        <input id="nSale" placeholder="Sale" />
        <input id="nSupp" placeholder="Supplier" />

        <select id="nCur">
          ${currencyOpt('USD')}
        </select>

        <br><br>

        <button id="saveNew">
          Save
        </button>

        <button id="closeNew">
          Cancel
        </button>

      </div>
    </div>
  `

  document.getElementById('closeNew').onclick =
    () => modal.innerHTML = ''

  document.getElementById('saveNew').onclick =
    saveNew
}

async function saveNew() {
  const code =
    document.getElementById('nCode').value

  if (!code) return

  await setDoc(
    doc(db, 'items', code),
    {
      stockCode: code,
      partNumber:
        document.getElementById('nPart').value,
      description:
        document.getElementById('nDesc').value,
      costPrice:
        Number(
          document.getElementById('nCost').value
        ),
      salePrice:
        Number(
          document.getElementById('nSale').value
        ),
      supplierName:
        document.getElementById('nSupp').value,
      currency:
        document.getElementById('nCur').value
    }
  )

  notify(
    'Product added',
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
    window._products || []

  let csv =
`stockCode,partNumber,description,costPrice,salePrice,currency,supplierName
`

  rows.forEach(x => {
    csv += [
      x.stockCode,
      x.partNumber,
      x.description,
      x.costPrice,
      x.salePrice,
      x.currency,
      x.supplierName
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
    'products.csv'

  a.click()

  notify(
    'CSV downloaded',
    'info'
  )
}

async function uploadCsv(e) {
  const file =
    e.target.files[0]

  if (!file) return

  const text =
    await file.text()

  const lines =
    text.trim().split('\n')

  const headers =
    lines[0].split(',')

  for (let i = 1; i < lines.length; i++) {
    const vals =
      lines[i].split(',')

    const row = {}

    headers.forEach((h, n) => {
      row[h.trim()] =
        vals[n]?.trim() || ''
    })

    const id =
      row.stockCode

    if (!id) continue

    await setDoc(
      doc(db, 'items', id),
      row,
      { merge: true }
    )
  }

  notify(
    'CSV uploaded',
    'success'
  )

  location.reload()
}