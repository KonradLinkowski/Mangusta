'use strict'
const config = require('config')

const mongoose = require('mongoose')

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const production = process.env.NODE_ENV === 'production'

// set mongoose promise handling
mongoose.Promise = global.Promise

// connect to the database
mongoose.connect(
  production ? config.get('database.prod') : config.get('database.dev'),
  { useNewUrlParser: true }
)

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})