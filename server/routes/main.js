const express = require('express')
const { LocalDatabase } = require('../helpers/localDatabase')
const router = express.Router()

const database = new LocalDatabase()

;(function () {
  ;[
    {
      name: 'Alice',
      age: 25,
      description: 'Friendly',
      summary: 'Passionate about building meaningful connections.',
    },
    {
      name: 'Bob',
      age: 30,
      description: 'Adventurous',
      summary: 'Exploring the world and embracing new challenges.',
    },
    {
      name: 'Charlie',
      age: 28,
      description: 'Tech Enthusiast',
      summary: 'Innovating with technology to shape the future.',
    },
    {
      name: 'David',
      age: 35,
      description: 'Creative',
      summary: 'Expressing creativity through various artistic endeavors.',
    },
    {
      name: 'Eva',
      age: 32,
      description: 'Analytical',
      summary: 'Analyzing data to derive insights and solve complex problems.',
    },
  ].forEach((user) => {
    database.insertUser(user)
  })
})()

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

router.post('/new-user', (req, res) => {
  const { name, age, description, summary } = req.body
  database.insertUser({ name, age, description, summary })
  res.status(201).redirect('/')
})

module.exports = router
