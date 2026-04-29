export async function generatePDF(data) {
  const res = await fetch('https://qr-pdf.onrender.com/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  const blob = await res.blob()
  window.open(URL.createObjectURL(blob))
}