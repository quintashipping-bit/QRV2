import jsPDF from 'jspdf'
import { db } from './firebase.js'
import { collection, getDocs } from 'firebase/firestore'

export async function generatePOs(order) {
  const suppliers = await loadSuppliers()

  const grouped = {}

  ;(order.items || []).forEach(item => {
    const supplier =
      item.supplierName ||
      item.supplier ||
      'Unknown'

    if (!grouped[supplier]) grouped[supplier] = []
    grouped[supplier].push(item)
  })

  for (const supplierName in grouped) {
    const supplier =
      suppliers.find(s => s.name === supplierName) || {}

    createPDF(order, supplier, grouped[supplierName])
  }
}

async function loadSuppliers() {
  const snap = await getDocs(collection(db, 'suppliers'))
  return snap.docs.map(doc => doc.data())
}

function createPDF(order, supplier, items) {
  const doc = new jsPDF()

  const left = 14
  let y = 20

  const currency =
    order.currency ||
    items?.[0]?.purchaseCurrency ||
    'EUR'

  const symbols = {
    EUR: '€',
    USD: '$',
    GBP: '£'
  }

  const symbol = symbols[currency] || currency

  // Header
  doc.setFontSize(18)
  doc.setTextColor(196, 0, 106)
  doc.text('PURCHASE ORDER', 196, y, { align: 'right' })

  y += 10

  doc.setFontSize(10)
  doc.setTextColor(0)

  doc.text(`PO Number: ${order.id}`, left, y)
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 196, y, { align: 'right' })

  y += 10

  doc.text(`Supplier: ${supplier.name || ''}`, left, y)
  doc.text(`Email: ${supplier.email || ''}`, left, y + 5)

  y += 20

  // Table Header
  doc.setFillColor(196, 0, 106)
  doc.rect(left, y, 182, 8, 'F')

  doc.setTextColor(255)
  doc.text('Code', left + 2, y + 5)
  doc.text('Description', left + 30, y + 5)
  doc.text('Qty', left + 110, y + 5)
  doc.text('Unit', left + 135, y + 5)
  doc.text('Total', left + 165, y + 5)

  y += 10

  doc.setTextColor(0)

  let total = 0

  items.forEach(item => {
    const qty = Number(item.qty || 0)
    const cost = Number(item.cost || item.purchasePrice || item.costPrice || 0)

    const rowTotal = qty * cost
    total += rowTotal

    doc.text(item.stockCode || '', left + 2, y)
    doc.text(item.description || '', left + 30, y)
    doc.text(String(qty), left + 110, y)
    doc.text(`${symbol}${cost.toFixed(2)}`, left + 135, y)
    doc.text(`${symbol}${rowTotal.toFixed(2)}`, left + 165, y)

    y += 8
  })

  y += 10

  doc.setFontSize(12)
  doc.setTextColor(196, 0, 106)

  doc.text(`TOTAL ${currency}`, left + 120, y)
  doc.text(`${symbol}${total.toFixed(2)}`, left + 165, y)

  doc.save(`PO_${supplier.name || 'Supplier'}_${order.id}.pdf`)
}