// client/src/pages/admin/archive.js
// ARCHIVE AUTOMATION PRO
// Move completed orders to archive

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

export async function renderArchive(panel) {
  panel.innerHTML = `
    <h2>Archive Automation</h2>

    <div class="grid-3">

      <button id="runArchive">
        Run Archive Check
      </button>

      <button id="viewArchive">
        View Archived
      </button>

      <div id="archiveCount">
        Ready...
      </div>

    </div>

    <br>

    <div id="archiveArea"></div>
  `

  document.getElementById(
    'runArchive'
  ).onclick =
    runArchive

  document.getElementById(
    'viewArchive'
  ).onclick =
    showArchive
}

async function runArchive() {
  const snap =
    await getDocs(
      collection(
        db,
        'orders'
      )
    )

  let moved = 0

  for (const d of snap.docs) {

    const row = {
      id:d.id,
      ...d.data()
    }

    if (
      shouldArchive(row)
    ) {
      await addDoc(
        collection(
          db,
          'orders_archive'
        ),
        {
          ...row,
          archivedDate:
            today()
        }
      )

      await deleteDoc(
        doc(
          db,
          'orders',
          d.id
        )
      )

      moved++
    }
  }

  document.getElementById(
    'archiveCount'
  ).innerHTML =
    `Archived: ${moved}`

  notify(
    `${moved} archived`,
    'success'
  )
}

function shouldArchive(x) {

  if (
    x.invoiced === true
  ) return true

  if (
    x.dispatchDate
  ) {
    const days =
      daysOld(
        x.dispatchDate
      )

    if (
      days >= 7
    ) return true
  }

  return false
}

function daysOld(dateStr) {
  const d1 =
    new Date(dateStr)

  const d2 =
    new Date()

  const diff =
    d2 - d1

  return Math.floor(
    diff /
    86400000
  )
}

async function showArchive() {
  const snap =
    await getDocs(
      collection(
        db,
        'orders_archive'
      )
    )

  const rows =
    snap.docs.map(d => ({
      id:d.id,
      ...d.data()
    }))

  document.getElementById(
    'archiveArea'
  ).innerHTML = `
    <table class="table">

      <thead>
        <tr>
          <th>PO</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Archived</th>
        </tr>
      </thead>

      <tbody>

        ${rows.map(x => `
          <tr>
            <td>
              ${x.poNumber || ''}
            </td>

            <td>
              ${x.customerName || ''}
            </td>

            <td>
              ${
                x.customerStatus || ''
              }
            </td>

            <td>
              ${
                x.archivedDate || ''
              }
            </td>
          </tr>
        `).join('')}

      </tbody>

    </table>
  `
}

function today() {
  return new Date()
    .toISOString()
    .split('T')[0]
}