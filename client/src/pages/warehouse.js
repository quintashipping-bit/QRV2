// client/src/pages/warehouse.js
// WAREHOUSE PRO FINAL ENTERPRISE REWRITE
// Clean rebuild with receipts, partials, query control, packing handover

import { db } from '../services/firebase.js'
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc
} from 'firebase/firestore'

import { notify } from '../services/notify.js'

let orders = []
let countries = []

export async function renderWarehouse(panel) {
  orders = await loadOrders()
  countries = await loadCountries()

  panel.innerHTML = `
    <h2>Warehouse</h2>

    <div class="card">
      <input id="searchBox" placeholder="Search PO / Customer" />
    </div>

    <br>

    <div id="gridArea"></div>
  `

  drawDashboard(orders)

  document.getElementById('searchBox').oninput = e => {
    const q = e.target.value.toUpperCase()

    drawDashboard(
      orders.filter(x =>
        (
          (x.poNumber || '') +
          (x.customerName || '')
        )
        .toUpperCase()
        .includes(q)
      )
    )
  }
}

async function loadOrders() {
  const snap =
    await getDocs(collection(db,'orders'))

  return snap.docs.map(d => ({
    id:d.id,
    ...d.data()
  }))
}

async function loadCountries() {
  const snap =
    await getDocs(collection(db,'countries'))

  return snap.docs.map(d => {
    const x = d.data()

    return {
      name:
        x.name ||
        x.country ||
        x.countryName ||
        ''
    }
  })
}

function drawDashboard(rows) {

  document.getElementById('gridArea').innerHTML = `
    <table class="table">

      <thead>
        <tr>
          <th>PO</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Summary</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        ${rows.map(x => `
          <tr>
            <td>${x.poNumber || ''}</td>
            <td>${x.customerName || ''}</td>
            <td>${badge(statusOf(x))}</td>
            <td>${summaryOf(x)}</td>
            <td>
              <button onclick="openWH('${x.id}')">
                View
              </button>
            </td>
          </tr>
        `).join('')}

      </tbody>

    </table>
  `

  window.openWH =
    id => renderDetail(id)
}

async function renderDetail(id) {

  const snap =
    await getDoc(doc(db,'orders',id))

  const row = {
    id:snap.id,
    ...snap.data()
  }

  const panel =
    document.getElementById('pageArea')

  panel.innerHTML = `
    <h2>Warehouse Detail</h2>

    <div class="card">
      <strong>PO:</strong> ${row.poNumber || ''}
      <br>
      <strong>Customer:</strong> ${row.customerName || ''}
      <br>
      <strong>Status:</strong>
      ${badge(statusOf(row))}
    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Part</th>
          <th>Description</th>
          <th>Ordered</th>
          <th>Received</th>
          <th>Balance</th>
          <th>Location</th>
          <th>Status</th>
          <th>Note</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        ${(row.items || []).map((x,i)=>`

          <tr>

            <td>${x.stockCode || ''}</td>

            <td>${x.description || ''}</td>

            <td>${num(x.qty)}</td>

            <td>${num(x.receivedQty)}</td>

            <td>
              ${num(x.qty) - num(x.receivedQty)}
            </td>

            <td>
              <select id="loc_${i}">
                ${locOpt(x.location)}
              </select>
            </td>

            <td>
              <select id="st_${i}">
                ${statusOpt(
                  x.lineStatus
                )}
              </select>
            </td>

            <td>
              <input
                id="nt_${i}"
                value="${x.note || ''}"
              />
            </td>

            <td>
              <input
                id="rcv_${i}"
                style="width:70px"
                placeholder="Qty"
              />

              <button
                onclick="recvLine('${row.id}',${i})"
              >
                Receive
              </button>
            </td>

          </tr>

        `).join('')}

      </tbody>

    </table>

    <br>

    <button
      onclick="packOrder('${row.id}')"
    >
      Pack Complete Order
    </button>

    <button
      onclick="renderWarehouse(
        document.getElementById('pageArea')
      )"
    >
      Back
    </button>

    <br><br>

    <div id="packArea"></div>
  `

  window.recvLine =
    (id,i) =>
      receiveLine(id,i)

  window.packOrder =
    id =>
      openPack(id)
}

async function receiveLine(id,index) {

  const snap =
    await getDoc(doc(db,'orders',id))

  const row = {
    id:snap.id,
    ...snap.data()
  }

  const item =
    row.items[index]

  const add =
    num(
      val('rcv_'+index)
    )

  if (!add) return

  item.receivedQty =
    num(item.receivedQty) + add

  item.location =
    val('loc_'+index)

  item.lineStatus =
    val('st_'+index)

  item.note =
    val('nt_'+index)

  if (
    item.receivedQty <
    num(item.qty)
  ) {
    item.lineStatus =
      'Partial'
  }

  if (
    item.receivedQty >=
    num(item.qty)
  ) {
    item.lineStatus =
      'Received'
  }

  await updateDoc(
    doc(db,'orders',id),
    {
      items:row.items,
      warehouseStatus:
        statusOf(row),
      warehouseSummary:
        summaryOf(row)
    }
  )

  notify(
    'Receipt saved',
    'success'
  )

  renderDetail(id)
}

async function openPack(id) {

  const snap =
    await getDoc(doc(db,'orders',id))

  const row = {
    id:snap.id,
    ...snap.data()
  }

  document.getElementById(
    'packArea'
  ).innerHTML = `

    <div class="card">

      <h3>
        Packing Handover
      </h3>

      <div class="grid-4">

        <input
          id="cartons"
          placeholder="Cartons"
        />

        <input
          id="weight"
          placeholder="Weight KG"
        />

        <input
          id="length"
          placeholder="Length"
        />

        <input
          id="width"
          placeholder="Width"
        />

      </div>

      <br>

      <input
        id="height"
        placeholder="Height"
      />

      <br><br>

      ${(row.items || [])
        .map((x,i)=>`

          <div class="grid-3">

            <div>
              ${x.stockCode}
            </div>

            <div>
              ${x.description}
            </div>

            <select id="coo_${i}">
              ${countryOpt(
                x.countryOfOrigin
              )}
            </select>

          </div>

          <br>

      `).join('')}

      <button
        onclick="savePack('${id}')"
      >
        Save Packing
      </button>

    </div>
  `

  window.savePack =
    id =>
      savePacking(id)
}

async function savePacking(id) {

  const snap =
    await getDoc(doc(db,'orders',id))

  const row = {
    id:snap.id,
    ...snap.data()
  }

  const items =
    row.items.map((x,i)=>({
      ...x,
      countryOfOrigin:
        val('coo_'+i)
    }))

  await updateDoc(
    doc(db,'orders',id),
    {
      items,
      packing:{
        cartons:val('cartons'),
        totalWeight:val('weight'),
        length:val('length'),
        width:val('width'),
        height:val('height')
      },
      warehouseStatus:'Packed',
      warehouseSummary:
        'Packed ready for shipping',
      packedReady:true
    }
  )

  notify(
    'Packed successfully',
    'success'
  )

  renderDetail(id)
}

function summaryOf(row) {

  const items =
    row.items || []

  return items.map(x => {

    const ord =
      num(x.qty)

    const rec =
      num(x.receivedQty)

    if (rec >= ord)
      return `${x.stockCode} Complete`

    if (rec > 0)
      return `${x.stockCode} ${rec}/${ord} received`

    if (
      x.lineStatus === 'Query'
    )
      return `${x.stockCode} Query`

    return `${x.stockCode} Awaiting`

  }).join(' | ')
}

function statusOf(row) {

  const items =
    row.items || []

  if (
    items.some(x =>
      x.lineStatus === 'Query'
    )
  ) return 'Query'

  if (
    items.every(x =>
      num(x.receivedQty) >=
      num(x.qty)
    )
  ) return 'Received'

  if (
    items.some(x =>
      num(x.receivedQty) > 0
    )
  ) return 'Partial'

  return 'Open'
}

function badge(t){

  let cls='red'

  if (
    t==='Received' ||
    t==='Packed'
  ) cls='green'

  if (
    t==='Partial'
  ) cls='amber'

  if (
    t==='Query'
  ) cls='purple'

  return `
    <span class="
      status-pill ${cls}
    ">
      ${t}
    </span>
  `
}

function locOpt(sel=''){
  const arr=['A1','A2','B1','B2']
  return arr.map(x=>`
    <option
      ${x===sel?'selected':''}
    >
      ${x}
    </option>
  `).join('')
}

function statusOpt(sel='Open'){
  const arr=[
    'Open',
    'Received',
    'Partial',
    'Query'
  ]

  return arr.map(x=>`
    <option
      ${x===sel?'selected':''}
    >
      ${x}
    </option>
  `).join('')
}

function countryOpt(sel=''){
  return countries.map(x=>`
    <option
      ${x.name===sel?'selected':''}
    >
      ${x.name}
    </option>
  `).join('')
}

function val(id){
  return document
    .getElementById(id)
    .value
}

function num(v){
  return Number(v || 0)
}