const modal = document.querySelector('dialog')
const btnExit = document.getElementById('btnExit')
const btnSaiba = document.getElementById('saibaMais')


btnSaiba.onclick = function () {
    modal.showModal()
}

btnExit.onclick = function () {
    modal.close()
}


