const newUserModal = document.getElementById('newUserModal')
const updateUserModal = document.getElementById('userUpdateModal')
const createNewUserBtn = document.getElementById('createNewUser')
const newUserBtn = document.getElementById('newUser')
const cancelNewUserModalBtn = document.querySelector(
  '#newUserModal #cancelModalBtn'
)

cancelNewUserModalBtn.addEventListener('click', (e) => {
  e.preventDefault()
  resetInputs('newUserModal')
  closeModal(newUserModal)
})

function resetInputs(modalElementId) {
  const inputs = document.querySelectorAll(
    `#${modalElementId} .input-block input`
  )
  const textarea = document.querySelector(
    `#${modalElementId} .input-block textarea`
  )

  inputs.forEach((input) => {
    input.value = ''
  })
  textarea.value = ''
}

function openModal(modalElement) {
  modalElement.classList.add('visible')
  document.body.style.overflowY = 'hidden'
}

function closeModal(modalElement) {
  modalElement.classList.remove('visible')
  document.body.style.overflowY = 'auto'
}

function checkEmptyInputs(modalElementId) {
  const inputs = document.querySelectorAll(
    `#${modalElementId} .input-block input`
  )
  const textarea = document.querySelector(
    `#${modalElementId} .input-block textarea`
  )

  let hasEmptyInputs = false
  inputs.forEach((input) => {
    if (input.value.trim() == '') hasEmptyInputs = true
  })
  if (textarea.value.trim() == '') hasEmptyInputs = true

  if (hasEmptyInputs) alert('Fill in all fields!')

  return hasEmptyInputs
}

// New User Modal
newUserBtn.addEventListener('click', () => {
  openModal(newUserModal)
})

createNewUserBtn.addEventListener('click', (e) => {
  checkEmptyInputs('newUserModal') && e.preventDefault()
})

// Update User Modal
if (updateUserModal) {
  const editUserBtn = document.getElementById('editUserBtn')
  const cancelUpdateUserModal = document.querySelector(
    '#userUpdateModal #cancelModalBtn'
  )

  editUserBtn.addEventListener('click', () => {
    openModal(updateUserModal)
  })

  cancelUpdateUserModal.addEventListener('click', (e) => {
    e.preventDefault()
    closeModal(updateUserModal)
  })
}
