// client/src/pages/analytics.js

export async function renderAnalytics(container) {
  container.innerHTML = `
    <div style="
      padding:20px;
      position:relative;
      z-index:1;
    ">

      <h2>Analytics Centre</h2>

      <div class="grid-4">

        <div class="card">
          <h3>Today Orders</h3>
          <p>£0.00</p>
        </div>

        <div class="card">
          <h3>Month Orders</h3>
          <p>£0.00</p>
        </div>

        <div class="card">
          <h3>Outstanding</h3>
          <p>£0.00</p>
        </div>

        <div class="card">
          <h3>Invoiced</h3>
          <p>£0.00</p>
        </div>

      </div>

      <br>

      <div class="card">
        Supplier reliability coming next
      </div>

    </div>
  `
}