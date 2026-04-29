export function notify(message, type = 'success') {
  let wrap = document.querySelector('.toast-wrap')

  if (!wrap) {
    wrap = document.createElement('div')
    wrap.className = 'toast-wrap'
    document.body.appendChild(wrap)
  }

  const toast = document.createElement('div')
  toast.className = `toast ${type}`
  toast.innerText = message

  wrap.appendChild(toast)

  setTimeout(() => {
    toast.classList.add('fadeout')

    setTimeout(() => {
      toast.remove()
    }, 250)

  }, 2200)
}

export function flashRow(rowEl) {
  rowEl.classList.add('row-updated')

  setTimeout(() => {
    rowEl.classList.remove('row-updated')
  }, 1600)
}