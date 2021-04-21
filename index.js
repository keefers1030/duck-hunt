/* eslint-disable no-console */
const express = require('express')
const scores = require('./scores')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { scores })
})
