// client/src/pages/orderDetail.js
// ORDER DETAIL FIXED VERSION
// Pulls supplier + sell price correctly
// Buyer + Delivery Date locked

import { db } from '../services/firebase.js'
import {
  doc,
  getDoc,
  updateDoc,
  getDocs,
  collection
} from 'firebase/firestore'

import { generatePOs } from '../services/poGenerator.js'

import {
  notify,
  flashRow
} from '../services/notify.js'

let suppliers = []
let currentOrder = null

export async function renderOrderDetail(container, orderId) {

  container.innerHTML =
    `<div class="card">
      Loading order...
    </div>`

  suppliers =
    await loadSuppliers()

  const ref =
    doc(db,'orders',orderId)

  const snap =
    await getDoc(ref)

  if (!snap.exists()) {
    container.innerHTML =
      `<div class="card">
        Order not found
      </div>`
    return
  }

  currentOrder = {
    id:snap.id,
    ...snap.data()
  }

  container.innerHTML = `
    <div class="card">

      <h2>Order Detail</h2>

      <div class="grid-3">

        <div>
          <label>Customer</label>
          <input
            value="${currentOrder.customerName || ''}"
            disabled
          />
        </div>

        <div>
          <label>Buyer</label>
          <input
            value="${currentOrder.buyerName || ''}"
            disabled
          />
        </div>

        <div>
          <label>Order Date</label>
          <input
            type="date"
            value="${currentOrder.created || ''}"
            disabled
          />
        </div>

      </div>

      <br>

      <div class="grid-2">

        <div>
          <label>Invoice Address</label>
          <textarea
            rows="4"
            disabled
          >${currentOrder.invoiceAddress || ''}</textarea>
        </div>

        <div>
          <label>Delivery Address</label>
          <textarea
            rows="4"
            disabled
          >${currentOrder.shippingAddress || ''}</textarea>
        </div>

      </div>

      <br>

      <div class="grid-3">

        <div>
          <label>Delivery Date</label>
          <input
            type="date"
            value="${currentOrder.deliveryDate || ''}"
            disabled
          />
        </div>

        <div>
          <label>Status</label>
          <input
            value="${currentOrder.status || 'Open'}"
            disabled
          />
        </div>

      </div>

      <hr>

      <table class="table">

        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Supplier</th>
            <th></th>
            <th>Qty</th>
            <th>Cost</th>
            <th>Sell</th>
            <th>Margin %</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody id="itemRows"></tbody>

      </table>

      <br>

      <div id="totalsBox"></div>

      <br>

      <button id="saveBtn">
        Save Changes
      </button>

      <button id="poBtn">
        Generate PO
      </button>

    </div>

    <div
      id="supplierModal"
      class="modal hidden"
    >
      <div class="modal-content">

        <h3>
          Change Supplier
        </h3>

        <input
          id="supplierSearch"
          placeholder="Search supplier..."
        />

        <br><br>

        <div id="supplierList"></div>

        <br>

        <button id="closeModal">
          Close
        </button>

      </div>
    </div>
  `

  renderRows()
  renderTotals()

  document.getElementById(
    'saveBtn'
  ).onclick =
    saveChanges

  document.getElementById(
    'poBtn'
  ).onclick =
    async () => {
      await generatePOs(
        currentOrder
      )
      notify(
        'Purchase Order generated',
        'success'
      )
    }

  document.getElementById(
    'closeModal'
  ).onclick =
    closeModal
}

async function loadSuppliers() {
  const snap =
    await getDocs(
      collection(
        db,
        'suppliers'
      )
    )

  return snap.docs.map(
    d => d.data()
  )
}

function renderRows() {

  const tbody =
    document.getElementById(
      'itemRows'
    )

  tbody.innerHTML =
    (currentOrder.items || [])
    .map((x,i) => {

      const sell =
        Number(
          x.sell ||
          x.salePrice ||
          0
        )

      const supplier =
        x.supplier ||
        x.supplierName ||
        ''

      const margin =
        calcMargin(
          Number(x.cost || 0),
          sell
        )

      return `
        <tr data-row="${i}">

          <td>${x.stockCode || ''}</td>

          <td>${x.description || ''}</td>

          <td>${supplier}</td>

          <td>
            <button
              class="supBtn"
              data-i="${i}"
            >
              Change
            </button>
          </td>

          <td>${x.qty || 0}</td>

          <td>${Number(
            x.cost || 0
          ).toFixed(2)}</td>

          <td>${sell.toFixed(2)}</td>

          <td>${margin.toFixed(2)}%</td>

          <td>
            <select
              class="curSel"
              data-i="${i}"
            >
              ${currencyOpt(
                x.purchaseCurrency || 'EUR'
              )}
            </select>
          </td>

        </tr>
      `
    }).join('')

  document
    .querySelectorAll('.supBtn')
    .forEach(btn => {
      btn.onclick = e =>
        openSupplierModal(
          Number(
            e.target.dataset.i
          )
        )
    })

  document
    .querySelectorAll('.curSel')
    .forEach(sel => {
      sel.onchange = e => {

        const i =
          Number(
            e.target.dataset.i
          )

        currentOrder.items[i]
          .purchaseCurrency =
            e.target.value

        notify(
          'Currency updated',
          'info'
        )
      }
    })
}

function renderTotals() {

  let sell = 0
  let cost = 0

  ;(
    currentOrder.items || []
  ).forEach(x => {

    const s =
      Number(
        x.sell ||
        x.salePrice ||
        0
      )

    sell +=
      s *
      Number(
        x.qty || 0
      )

    cost +=
      Number(
        x.cost || 0
      ) *
      Number(
        x.qty || 0
      )
  })

  const gp =
    sell - cost

  const margin =
    sell
    ? (gp/sell)*100
    : 0

  document.getElementById(
    'totalsBox'
  ).innerHTML = `
    <strong>Total Sell:</strong>
    ${sell.toFixed(2)}
    |
    <strong>Total Cost:</strong>
    ${cost.toFixed(2)}
    |
    <strong>GP:</strong>
    ${gp.toFixed(2)}
    |
    <strong>Margin:</strong>
    ${margin.toFixed(2)}%
  `
}

function openSupplierModal(index) {

  const modal =
    document.getElementById(
      'supplierModal'
    )

  modal.classList.remove(
    'hidden'
  )

  const search =
    document.getElementById(
      'supplierSearch'
    )

  const list =
    document.getElementById(
      'supplierList'
    )

  const draw = txt => {

    const q =
      txt.toLowerCase()

    list.innerHTML =
      suppliers
      .filter(s =>
        s.name
        ?.toLowerCase()
        .includes(q)
      )
      .map(s => `
        <div
          class="supplier-row"
          data-name="${s.name}"
        >
          ${s.name}
        </div>
      `).join('')

    document
      .querySelectorAll(
        '.supplier-row'
      )
      .forEach(row => {

        row.onclick = () => {

          currentOrder.items[index]
            .supplier =
              row.dataset.name

          closeModal()
          renderRows()
          renderTotals()

          notify(
            'Supplier updated'
          )
        }
      })
  }

  draw('')

  search.oninput =
    e =>
      draw(
        e.target.value
      )
}

function closeModal() {
  document
    .getElementById(
      'supplierModal'
    )
    .classList.add(
      'hidden'
    )
}

async function saveChanges() {

  await updateDoc(
    doc(
      db,
      'orders',
      currentOrder.id
    ),
    {
      items:
        currentOrder.items
    }
  )

  notify(
    'Order updated successfully'
  )
}

function currencyOpt(sel) {
  return `
    <option ${
      sel==='EUR'
      ? 'selected':''
    }>EUR</option>

    <option ${
      sel==='USD'
      ? 'selected':''
    }>USD</option>

    <option ${
      sel==='GBP'
      ? 'selected':''
    }>GBP</option>
  `
}

function calcMargin(cost,sell) {
  if (!sell) return 0
  return (
    (sell-cost)/sell
  ) * 100
}