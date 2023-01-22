const modal = document.querySelector('.modal')
const btnOpenModal = document.querySelector('.btn-trailer')
const btnCloseModal = document.querySelector('.close-modal')
const frameSource = document.getElementById('video')
const videoLink = video.src

function modalToggle() {
	modal.classList.toggle('open-modal')
}

btnOpenModal.addEventListener('click', () => {
	frameSource.setAttribute('src', videoLink)
	modalToggle()
})

btnCloseModal.addEventListener('click', () => {
	frameSource.setAttribute('src', '')
	modalToggle()
})
