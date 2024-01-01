const express = require('express')
const { database } = require('../../server')
const router = express.Router()

router.get('/', (req, res) => {
  try {
    const locals = {
      title: 'Home',
    }

    const usersDb = database.getUsers()

    res.render('index', { locals, usersDb })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
