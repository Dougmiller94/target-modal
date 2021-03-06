const openModalButtons = document.querySelectorAll('[data-model-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventlistener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModel(model)
    })
})

overlay.addEventListener('click', () => {
    const modal = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModel(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

