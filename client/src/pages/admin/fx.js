// client/src/pages/admin/fx.js
// FX ADMIN PRO FINAL
// Reads live Firestore fxRates collection

import { db } from '../../services/firebase.js'

import {
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc
} from 'firebase/firestore'

import {
  notify
} from '../../services/notify.js'

export async function renderFx(panel) {
  const rows =
    await loadRates()

  panel.innerHTML = `
    <h3>FX Control Centre</h3>

    <div class="grid-4">

      <input
        id="fxSearch"
        placeholder="Search currency..."
      />

      <button id="fxRefresh">
        Reload
      </button>

      <button id="fxAdd">
        Add Currency
      </button>

      <button id="fxConvert">
        Converter
      </button>

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Code</th>
          <th>Rate vs GBP</th>
          <th>Updated</th>
          <th>Status</th>
          <th>Save</th>
        </tr>
      </thead>

      <tbody id="fxRows">
        ${rows.map(rowHtml).join('')}
      </tbody>

    </table>

    <br>

    <div id="fxTool"></div>
  `

  document.getElementById(
    'fxSearch'
  ).oninput =
    filterRows

  document.getElementById(
    'fxRefresh'
  ).onclick =
    () =>
      renderFx(panel)

  document.getElementById(
    'fxAdd'
  ).onclick =
    addCurrency

  document.getElementById(
    'fxConvert'
  ).onclick =
    showConverter
}

async function loadRates() {
  const snap =
    await getDocs(
      collection(
        db,
        'fxRates'
      )
    )

  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }))
  .sort((a,b)=>
    a.code.localeCompare(
      b.code
    )
  )
}

function rowHtml(x) {
  const fresh =
    isFresh(
      x.updated
    )

  return `
    <tr class="${
      fresh
      ? 'okRow'
      : 'warnRow'
    }">

      <td>${x.code}</td>

      <td>
        <input
          id="rate_${x.code}"
          value="${x.rate}"
        />
      </td>

      <td>
        ${x.updated || ''}
      </td>

      <td>
        ${
          fresh
          ? 'Live'
          : 'Stale'
        }
      </td>

      <td>
        <button
          onclick="window.saveFx('${x.code}')"
        >
          Save
        </button>
      </td>

    </tr>
  `
}

window.saveFx =
async code => {
  const val =
    Number(
      document.getElementById(
        'rate_' + code
      ).value
    )

  await updateDoc(
    doc(
      db,
      'fxRates',
      code
    ),
    {
      rate: val,
      updated:
        stamp(),
      source:
        'Manual Edit'
    }
  )

  notify(
    code +
    ' updated',
    'success'
  )
}

function filterRows(e) {
  const q =
    e.target.value
    .toUpperCase()

  const trs =
    document.querySelectorAll(
      '#fxRows tr'
    )

  trs.forEach(tr => {
    tr.style.display =
      tr.innerText
      .includes(q)
      ? ''
      : 'none'
  })
}

async function addCurrency() {
  const code =
    prompt(
      'Currency Code'
    )

  if (!code) return

  await setDoc(
    doc(
      db,
      'fxRates',
      code.toUpperCase()
    ),
    {
      code:
        code.toUpperCase(),
      rate: 1,
      updated:
        stamp(),
      source:
        'Manual Add'
    }
  )

  notify(
    'Currency added',
    'success'
  )

  renderFx(
    document.getElementById(
      'adminPanel'
    )
  )
}

function showConverter() {
  document.getElementById(
    'fxTool'
  ).innerHTML = `
    <div class="card">

      <h4>Quick Converter</h4>

      <div class="grid-4">

        <input
          id="amt"
          value="1000"
        />

        <input
          id="from"
          placeholder="GBP"
        />

        <input
          id="to"
          placeholder="USD"
        />

        <button id="goFx">
          Convert
        </button>

      </div>

      <br>

      <div id="fxOut"></div>

    </div>
  `

  document.getElementById(
    'goFx'
  ).onclick =
    convertNow
}

async function convertNow() {
  const amt =
    Number(
      document.getElementById(
        'amt'
      ).value
    )

  const from =
    document.getElementById(
      'from'
    ).value
    .toUpperCase()

  const to =
    document.getElementById(
      'to'
    ).value
    .toUpperCase()

  const rows =
    await loadRates()

  const map = {}

  rows.forEach(x => {
    map[x.code] =
      Number(x.rate)
  })

  let result = 0

  if (from === 'GBP')
    result =
      amt * map[to]

  else if (to === 'GBP')
    result =
      amt / map[from]

  else {
    const gbp =
      amt / map[from]

    result =
      gbp * map[to]
  }

  document.getElementById(
    'fxOut'
  ).innerHTML = `
    <div class="metricBig">
      ${amt}
      ${from}
      =
      ${result.toFixed(2)}
      ${to}
    </div>
  `
}

function stamp() {
  return new Date()
    .toLocaleString(
      'en-GB'
    )
}

function isFresh(dateStr) {
  return true
}