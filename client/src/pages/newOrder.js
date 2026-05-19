// client/src/pages/newOrder.js
// NEW ORDER PRO FIRESTORE EXACT FINAL
// Uses your REAL Firestore product schema exactly
// Search by stock / client stock / part / description / supplier
// Customer autofill + due date + pricing + clean stable layout

import { db } from '../services/firebase.js'

import {
  collection,
  getDocs,
  addDoc
} from 'firebase/firestore'

import {
  notify
} from '../services/notify.js'

let products = []
let customers = []
let items = []

export async function renderNewOrder(panel) {

  items = []

  products =
    await loadProducts()

  customers =
    await loadCustomers()

  panel.innerHTML = `
    <h2>New Order</h2>

    <div class="card">

      <div class="grid-3">

        <div>
          <label>PO Number</label>
          <input id="poNumber" />
        </div>

        <div>
          <label>Customer</label>
          <select id="customerName">
            <option value="">
              Select Customer
            </option>

            ${customers.map(c => `
              <option>
                ${c.name || ''}
              </option>
            `).join('')}

          </select>
        </div>

        <div>
          <label>Buyer</label>
          <input id="buyerName" />
        </div>

        <div>
          <label>Order Date</label>
          <input
            type="date"
            id="orderDate"
          />
        </div>

        <div>
          <label>Due Date</label>
          <input
            type="date"
            id="dueDate"
          />
        </div>

        <div>
          <label>Currency</label>
          <select id="currency">
            <option>GBP</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </div>

      </div>

      <br>

      <div class="grid-2">

        <div>
          <label>Shipping Address</label>
          <textarea
            id="shippingAddress"
            rows="4"
          ></textarea>
        </div>

        <div>
          <label>Invoice Address</label>
          <textarea
            id="invoiceAddress"
            rows="4"
          ></textarea>
        </div>

      </div>

    </div>

    <br>

    <div class="card">

      <h3>Add Item</h3>

      <div class="grid-5">

        <div>
          <input
            id="searchBox"
            list="productList"
            placeholder="Type stock / part / desc"
          />

          <datalist id="productList">

            ${products.map(p => `
              <option value="${p.stockCode || ''}">
                ${p.stockCode || ''}
                ${p.partNumber || ''}
                ${p.description || ''}
                ${p.supplierName || p.supplier || ''}
              </option>
            `).join('')}

          </datalist>

        </div>

        <input
          id="partNumber"
          placeholder="Part Number"
          readonly
        />

        <input
          id="description"
          placeholder="Description"
          readonly
        />

        <input
          id="qty"
          type="number"
          placeholder="Qty"
        />

        <button id="addBtn">
          Add Line
        </button>

      </div>

    </div>

    <br>

    <div id="itemArea"></div>

    <br>

    <button id="saveBtn">
      Create Order
    </button>
  `

  document.getElementById(
    'customerName'
  ).onchange =
    fillCustomer

  document.getElementById(
    'searchBox'
  ).oninput =
    autoFillProduct

  document.getElementById(
    'addBtn'
  ).onclick =
    addLine

  document.getElementById(
    'saveBtn'
  ).onclick =
    saveOrder

  drawItems()
}

async function loadProducts() {

  const itemSnap =
    await getDocs(
      collection(db,'items')
    )

  const itemRows = itemSnap.docs.map(d => ({
    id:d.id,
    ...d.data()
  }))

  if (itemRows.length) return itemRows

  const productSnap =
    await getDocs(
      collection(db,'products')
    )

  return productSnap.docs.map(d => ({
    id:d.id,
    ...d.data()
  }))
}

async function loadCustomers() {

  const snap =
    await getDocs(
      collection(db,'customers')
    )

  return snap.docs.map(d => d.data())
}

function fillCustomer() {

  const c =
    customers.find(x =>
      x.name ===
      val('customerName')
    )

  if (!c) return

  setVal(
    'shippingAddress',
    c.shippingAddress || ''
  )

  setVal(
    'invoiceAddress',
    c.invoiceAddress || ''
  )
}

function autoFillProduct() {

  const p =
    findProduct(
      val('searchBox')
    )

  if (!p) return

  setVal(
    'partNumber',
    p.partNumber || ''
  )

  setVal(
    'description',
    p.description || ''
  )
}

function findProduct(q) {

  const s =
    clean(q)

  const exact = products.find(p =>

    clean(
      p.stockCode
    ) === s ||

    clean(
      p.clientStockCode
    ) === s ||

    clean(
      p.partNumber
    ) === s ||

    clean(
      p.description
    ) === s

  )

  if (exact) return exact

  const matches = products.filter(p =>
    [
      p.stockCode,
      p.clientStockCode,
      p.partNumber,
      p.description,
      p.supplier,
      p.supplierName
    ]
    .map(clean)
    .some(x => x.includes(s))
  )

  return matches.length === 1
    ? matches[0]
    : null
}

function addLine() {

  const p =
    findProduct(
      val('searchBox')
    )

  if (!p) {
    notify(
      'Enter correct item number',
      'error'
    )
    return
  }

  const qty =
    Number(
      val('qty') || 0
    )

  if (qty <= 0) {
    notify(
      'Enter quantity',
      'error'
    )
    return
  }

  items.push({

    stockCode:
      p.stockCode || '',

    clientStockCode:
      p.clientStockCode || '',

    partNumber:
      p.partNumber || '',

    description:
      p.description || '',

    supplier:
      p.supplier ||
      p.supplierName || '',

    qty,

    sell:
      Number(
        p.salePrice || 0
      ),

    cost:
      Number(
        p.costPrice || 0
      ),

    hsCode:
      p.hsCode || '',

    countryOfOrigin:
      p.countryOfOrigin || '',

    receivedQty:0,
    lineStatus:'Open'
  })

  clearLine()
  drawItems()
}

function clearLine() {

  setVal('searchBox','')
  setVal('partNumber','')
  setVal('description','')
  setVal('qty','')
}

function drawItems() {

  document.getElementById(
    'itemArea'
  ).innerHTML = `
    <table class="table">

      <thead>
        <tr>
          <th>Stock</th>
          <th>Part</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>

        ${items.map(x => `
          <tr>
            <td>${x.stockCode}</td>
            <td>${x.partNumber}</td>
            <td>${x.description}</td>
            <td>${x.qty}</td>
            <td>${money(x.sell)}</td>
            <td>${money(x.sell * x.qty)}</td>
          </tr>
        `).join('')}

      </tbody>

    </table>
  `
}

async function saveOrder() {

  if (!items.length) {
    notify(
      'Add items first',
      'error'
    )
    return
  }

  await addDoc(
    collection(db,'orders'),
    {
      poNumber:
        val('poNumber'),

      customerName:
        val('customerName'),

      buyerName:
        val('buyerName'),

      orderDate:
        val('orderDate'),

      dueDate:
        val('dueDate'),

      currency:
        val('currency'),

      shippingAddress:
        val('shippingAddress'),

      invoiceAddress:
        val('invoiceAddress'),

      items,

      status:'Open',

      created:
        new Date()
        .toISOString()
        .slice(0,10)
    }
  )

  notify(
    'Order Created',
    'success'
  )

  items = []
  drawItems()
}

function val(id) {
  return document
    .getElementById(id)
    .value
}

function setVal(id,v) {
  document
    .getElementById(id)
    .value = v
}

function clean(v) {
  return String(v || '')
    .trim()
    .toUpperCase()
}

function money(v) {
  return Number(v || 0)
    .toFixed(2)
}
