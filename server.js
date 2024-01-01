const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

const PORT = 3333 ?? process.env.PORT

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main.js'))

app.listen(PORT, () => console.log(`listening on http://localhost:${3333}`))
