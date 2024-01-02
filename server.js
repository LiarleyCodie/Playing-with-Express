const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const methodOverride = require('method-override')
const { LocalDatabase } = require('./server/helpers/localDatabase.js')

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

const PORT = 3333 ?? process.env.PORT

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

module.exports = { database }
app.use('/', require('./server/routes/main.js'))
app.use('/', require('./server/routes/users.js'))
app.use((req, res) => {
  const locals = {
    title: '404 - Not Found',
  }
  res.status(404).render('notfound', { locals })
})

app.listen(PORT, () => console.log(`listening on http://localhost:${3333}`))
