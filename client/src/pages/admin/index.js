// client/src/pages/admin/index.js
// ADMIN FINAL STABLE
// Fixes white screen by using safe lazy imports

export function renderAdmin(panel) {

  panel.innerHTML = `
    <h2>
      Admin Panel
    </h2>

    <div class="grid-3">

      <button id="productsBtn">
        Products
      </button>

      <button id="suppliersBtn">
        Suppliers
      </button>

      <button id="usersBtn">
        Users
      </button>

      <button id="customersBtn">
        Customers
      </button>

      <button id="fxBtn">
        FX Rates
      </button>

      <button id="countryBtn">
        Country Master
      </button>

      <button id="archiveBtn">
        Archive
      </button>

    </div>

    <br>

    <div class="card">
      Select an admin area.
    </div>
  `

  bind(
    'productsBtn',
    './products.js',
    [
      'renderProductsAdmin',
      'renderProducts'
    ],
    panel
  )

  bind(
    'suppliersBtn',
    './suppliers.js',
    [
      'renderSuppliersAdmin',
      'renderSuppliers'
    ],
    panel
  )

  bind(
    'usersBtn',
    './users.js',
    [
      'renderUsersAdmin',
      'renderUsers'
    ],
    panel
  )

  bind(
    'customersBtn',
    './customers.js',
    [
      'renderCustomersAdmin',
      'renderCustomers'
    ],
    panel
  )

  bind(
    'fxBtn',
    './fx.js',
    [
      'renderFxAdmin',
      'renderFX',
      'renderFx'
    ],
    panel
  )

  bind(
    'countryBtn',
    './countries.js',
    [
      'renderCountryAdmin'
    ],
    panel
  )

  bind(
    'archiveBtn',
    './archive.js',
    [
      'renderArchive'
    ],
    panel
  )
}

function bind(
  id,
  file,
  names,
  panel
) {

  document.getElementById(id)
    .onclick =
    async () => {

      try {

        const mod =
          await import(file)

        for (const n of names) {

          if (
            typeof mod[n]
            === 'function'
          ) {
            mod[n](panel)
            return
          }
        }

        panel.innerHTML = `
          <div class="card">
            Module loaded but
            no render function
            found.
          </div>
        `

      } catch (err) {

        console.error(err)

        panel.innerHTML = `
          <div class="card">
            Failed loading
            module:
            ${file}
          </div>
        `
      }
    }
}