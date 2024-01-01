console.log('Hello, Ouldi')

const newUserBtn = document.getElementById('newUser')
const cancelNewUserBtn = document.getElementById('cancelNewUser')
const createNewUserBtn = document.getElementById('createNewUser')
const newUserModal = document.getElementById('newUserModal')
const inputs = document.querySelectorAll('.input-block input')
const textarea = document.querySelector('.input-block textarea')

newUserBtn.addEventListener('click', () => {
  openModal()
})

cancelNewUserBtn.addEventListener('click', (e) => {
  e.preventDefault()
  closeModal()
  resetInputs()
})

createNewUserBtn.addEventListener('click', (e) => {
  checkEmptyInputs() && e.preventDefault()
})

function resetInputs() {
  inputs.forEach((input) => {
    input.value = ''
  })
  textarea.value = ''
}

function openModal() {
  newUserModal.classList.add('visible')
  document.body.style.overflowY = 'hidden'
}

function closeModal() {
  newUserModal.classList.remove('visible')
  document.body.style.overflowY = 'auto'
}

function checkEmptyInputs() {
  alert('Fill in all fields!')

  let hasEmptyInputs = false
  inputs.forEach((input) => {
    if (input.value.trim() == '') hasEmptyInputs = true
  })
  if (textarea.value.trim() == '') hasEmptyInputs = true

  return hasEmptyInputs
}
