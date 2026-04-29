// client/src/pages/shipping.js
// SHIPPING PRO V7 FULL WORKFLOW
// Adds:
// ✔ Commercial Invoice updates Open Orders customer status
// ✔ Dispatch method = Courier / Ex-Works
// ✔ Confirm Shipment button
// ✔ Customer status auto-updates

import { db } from '../services/firebase.js'

import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc
} from 'firebase/firestore'

import { notify } from '../services/notify.js'

let orders = []
let current = null

const DEPOT = 'UK' // change to user location later

export async function renderShipping(panel) {
  orders = await loadOrders()
  drawSelector(panel)
}

async function loadOrders() {
  const snap = await getDocs(
    collection(db,'orders')
  )

  return snap.docs.map(d => ({
    id:d.id,
    ...d.data()
  }))
}

function drawSelector(panel) {

  panel.innerHTML = `
    <h1>Shipping Pro</h1>

    <select id="shipSel">
      <option value="">Select Order</option>

      ${orders.map(x => `
        <option value="${x.id}">
          ${x.poNumber} - ${x.customerName}
        </option>
      `).join('')}
    </select>

    <button id="loadBtn">
      Load Order
    </button>
  `

  document.getElementById(
    'loadBtn'
  ).onclick = async () => {

    const id =
      document.getElementById(
        'shipSel'
      ).value

    if (!id) return

    const snap =
      await getDoc(
        doc(db,'orders',id)
      )

    current = {
      id:snap.id,
      ...snap.data()
    }

    drawOrder(panel)
  }
}

function drawOrder(panel) {

  const p =
    current.packing || {}

  panel.innerHTML = `
    <h1>Shipping Pro</h1>

    <button id="backBtn">
      Back
    </button>

    <h2>
      PO: ${current.poNumber}
    </h2>

    <p>
      Customer:
      ${current.customerName}
    </p>

    <hr>

    <h2>
      Commercial Lines
    </h2>

    <table class="table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Description</th>
          <th>Qty</th>
          <th>HS</th>
          <th>Origin</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>

      ${(current.items || []).map((x,i)=>`
        <tr>
          <td>${x.partNumber || ''}</td>
          <td>${x.description || ''}</td>
          <td>${x.qty || 0}</td>

          <td>
            <input
              class="hs"
              data-i="${i}"
              value="${x.hsCode || ''}"
            />
          </td>

          <td>
            ${x.countryOfOrigin || ''}
          </td>

          <td>
            ${num(
              (x.qty||0) *
              (x.sell ||
               x.salePrice ||
               0)
            )}
          </td>
        </tr>
      `).join('')}

      </tbody>
    </table>

    <hr>

    <h2>
      Goods Ready
    </h2>

    <input id="cartons"
      placeholder="Cartons"
      value="${p.cartons || ''}" />

    <input id="weight"
      placeholder="Weight kg"
      value="${p.totalWeight || ''}" />

    <br><br>

    <input id="len"
      placeholder="Length"
      value="${p.length || ''}" />

    <input id="wid"
      placeholder="Width"
      value="${p.width || ''}" />

    <input id="hei"
      placeholder="Height"
      value="${p.height || ''}" />

    <br><br>

    <button id="packBtn">
      Packing List
    </button>

    <button id="invBtn">
      Commercial Invoice
    </button>

    <hr>

    <h2>
      Dispatch
    </h2>

    <select id="shipType">
      <option>Courier</option>
      <option>Ex-Works</option>
    </select>

    <input id="courier"
      placeholder="Courier Name" />

    <input id="awb"
      placeholder="Tracking / AWB" />

    <input id="shipDate"
      type="date" />

    <br><br>

    <button id="shipBtn">
      Confirm Shipment
    </button>
  `

  document.getElementById(
    'backBtn'
  ).onclick =
    () => renderShipping(panel)

  document.getElementById(
    'packBtn'
  ).onclick = packingList

  document.getElementById(
    'invBtn'
  ).onclick = commercialInvoice

  document.getElementById(
    'shipBtn'
  ).onclick = confirmShipment
}

async function savePack() {

  document
    .querySelectorAll('.hs')
    .forEach(x => {
      current.items[
        Number(x.dataset.i)
      ].hsCode = x.value
    })

  await updateDoc(
    doc(db,'orders',current.id),
    {
      items:current.items,

      packing:{
        cartons:val('cartons'),
        totalWeight:val('weight'),
        length:val('len'),
        width:val('wid'),
        height:val('hei')
      }
    }
  )
}

async function packingList() {
  await savePack()
  notify('Packing List Created')
}

async function commercialInvoice() {

  await savePack()

  const msg =
`Goods in our ${DEPOT} depot packed ${val('weight')}kg (${val('len')}x${val('wid')}x${val('hei')}) please can you issue shipping instructions accordingly.`

  await updateDoc(
    doc(db,'orders',current.id),
    {
      customerStatus: msg,
      shippingStatus:
        'Awaiting Instructions',
      status:
        'Packed'
    }
  )

  notify(
    'Commercial Invoice Created + Customer Updated',
    'success'
  )
}

async function confirmShipment() {

  const type =
    val('shipType')

  const date =
    val('shipDate')

  let msg = ''

  if (type === 'Courier') {

    msg =
`Goods shipped from ${DEPOT} depot under ${val('courier')} AWB ${val('awb')}.`

  } else {

    msg =
`Goods collected from our ${DEPOT} depot on ${date}.`
  }

  await updateDoc(
    doc(db,'orders',current.id),
    {
      customerStatus: msg,
      shippingStatus:
        'Shipped',
      status:
        'Complete'
    }
  )

  notify(
    'Shipment Confirmed',
    'success'
  )
}

function val(id) {
  return document
    .getElementById(id)
    .value
}

function num(v) {
  return Number(v || 0)
    .toFixed(2)
}