const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('server running')
})