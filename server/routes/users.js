const express = require('express')
const { database } = require('../../server')
const router = express.Router()

router.post('/users/new', (req, res) => {
  const { name, age, description, summary } = req.body
  database.insertUser({ name, age, description, summary })
  res.status(201).redirect('/')
})

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

module.exports = router
