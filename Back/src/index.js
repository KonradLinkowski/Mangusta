'use strict'
const config = require('config')

const mongoose = require('mongoose')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport = require('passport')

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(passport.initialize())
require('../config/passport')(passport)

const production = process.env.NODE_ENV === 'production'

app.use('/', require('./routes/product-routes'))
app.use('/', require('./routes/tag-routes'))

// set mongoose promise handling
mongoose.Promise = global.Promise

// connect to the database
mongoose.connect(
  production ? config.get('database.prod') : config.get('database.dev'),
  { useNewUrlParser: true,
    useCreateIndex: true }
)

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
