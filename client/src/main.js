// client/src/main.js
// FULL FINAL MAIN.JS
// Global routing fixed

import './style.css'

import {
  renderNav,
  bindNav
} from './components/nav.js'

import {
  renderNewOrder
} from './pages/newOrder.js'

import {
  renderOpenOrders
} from './pages/openOrders.js'

import {
  renderWarehouse
} from './pages/warehouse.js'

import {
  renderShipping
} from './pages/shipping.js'

import {
  renderInvoicing
} from './pages/invoicing.js'

import {
  renderAnalytics
} from './pages/analytics.js'

import {
  renderAdmin
} from './pages/admin/index.js'

import {
  renderArchive
} from './pages/admin/archive.js'

import {
  renderProducts
} from './pages/admin/products.js'

import {
  renderCustomers
} from './pages/admin/customers.js'

import {
  renderSuppliers
} from './pages/admin/suppliers.js'

import {
  renderFx
} from './pages/admin/fx.js'

const app =
  document.getElementById(
    'app'
  )

window.route = route

boot()

function boot() {
  app.innerHTML = `
    <div id="navArea"></div>
    <div id="pageArea"></div>
  `

  document.getElementById(
    'navArea'
  ).innerHTML =
    renderNav()

  bindNav(route)

  route('newOrder')
}

function route(page) {
  const pageArea =
    document.getElementById(
      'pageArea'
    )

  pageArea.innerHTML = `
    <div class="loading">
      Loading...
    </div>
  `

  switch (page) {

    case 'newOrder':
      renderNewOrder(pageArea)
      break

    case 'openOrders':
      renderOpenOrders(pageArea)
      break

    case 'warehouse':
      renderWarehouse(pageArea)
      break

    case 'shipping':
      renderShipping(pageArea)
      break

    case 'invoicing':
      renderInvoicing(pageArea)
      break

    case 'analytics':
      renderAnalytics(pageArea)
      break

    case 'admin':
      renderAdmin(pageArea)
      break

    case 'archive':
      renderArchive(pageArea)
      break

    case 'products':
      renderProducts(pageArea)
      break

    case 'customers':
      renderCustomers(pageArea)
      break

    case 'suppliers':
      renderSuppliers(pageArea)
      break

    case 'fx':
      renderFx(pageArea)
      break

    default:
      renderNewOrder(pageArea)
      break
  }
}