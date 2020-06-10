require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
// const swaggerDoc = require('../swaggerDoc')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(routes)
app.use('/api-doc', express.static('docs'))

app.listen(process.env.PORT || 3333, () => console.log('Server started'))

module.exports = app