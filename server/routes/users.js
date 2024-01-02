const express = require('express')
const { database } = require('../../server')
const router = express.Router()

// POST - Create new user
router.post('/users/new', (req, res) => {
  const { name, age, description, summary } = req.body
  database.insertUser({ name, age, description, summary })
  res.status(201).redirect('/')
})

// GET - User
router.get('/users/:id', (req, res) => {
  try {
    const { id } = req.params
    const user = database.getUser(id)
    const locals = {
      title: user.name,
    }
    res.render('users/id', { locals, user })
  } catch (err) {
    console.error(err)
  }
})

// POST - Edit User
router.post('/users/:id', (req, res) => {
  const { name, age, description, summary } = req.body
  const { id: userId } = req.params

  database.updateUser(userId, { name, age, description, summary })
  res.status(204).redirect(`/users/${userId}`)
})

// DELETE - Delete User
router.delete('/users/:id', (req, res) => {
  const { id: userId } = req.params
  database.deleteUser(userId)
  res.status(204).redirect('/')
})

module.exports = router
