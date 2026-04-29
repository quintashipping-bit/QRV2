// client/src/pages/admin/countries.js
// ADMIN COUNTRY MASTER

import { db } from '../../services/firebase.js'

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'

import {
  notify
} from '../../services/notify.js'

export async function renderCountryAdmin(panel) {

  const rows =
    await loadCountries()

  panel.innerHTML = `
    <h2>
      Country Master
    </h2>

    <div class="card">

      <div class="grid-3">

        <input
          id="countryName"
          placeholder="Country Name"
        />

        <input
          id="countryCode"
          placeholder="ISO Code"
        />

        <button id="addBtn">
          Add Country
        </button>

      </div>

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        ${rows.map(x => `
          <tr>

            <td>${x.name}</td>

            <td>${x.code}</td>

            <td>
              <button
                onclick="delCountry('${x.id}')"
              >
                Remove
              </button>
            </td>

          </tr>
        `).join('')}

      </tbody>

    </table>
  `

  document.getElementById(
    'addBtn'
  ).onclick =
    addCountry

  window.delCountry =
    removeCountry
}

async function loadCountries() {

  const snap =
    await getDocs(
      collection(
        db,
        'countries'
      )
    )

  return snap.docs.map(d => ({
    id:d.id,
    ...d.data()
  }))
}

async function addCountry() {

  const name =
    val('countryName')

  const code =
    val('countryCode')

  if (!name) return

  await addDoc(
    collection(
      db,
      'countries'
    ),
    {
      name,
      code
    }
  )

  notify(
    'Country Added',
    'success'
  )

  renderCountryAdmin(
    document.getElementById(
      'pageArea'
    )
  )
}

async function removeCountry(id) {

  await deleteDoc(
    doc(
      db,
      'countries',
      id
    )
  )

  notify(
    'Removed',
    'success'
  )

  renderCountryAdmin(
    document.getElementById(
      'pageArea'
    )
  )
}

function val(id) {
  return document
    .getElementById(id)
    .value
}