// client/src/components/nav.js
// FULLY FIXED NAV.JS
// All buttons use same routing system

export function renderNav() {
  return `
    <div class="topbar">

      <button data-page="newOrder">
        New Order
      </button>

      <button data-page="openOrders">
        Open Orders
      </button>

      <button data-page="warehouse">
        Warehouse
      </button>

      <button data-page="shipping">
        Shipping
      </button>

      <button data-page="invoicing">
        Invoicing
      </button>

      <button data-page="admin">
        Admin
      </button>

      <button data-page="analytics">
        Analytics
      </button>

    </div>
  `
}

export function bindNav(route) {
  document.addEventListener(
    'click',
    e => {
      const btn =
        e.target.closest(
          '[data-page]'
        )

      if (!btn) return

      e.preventDefault()

      route(
        btn.dataset.page
      )
    }
  )
}