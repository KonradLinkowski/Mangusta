'use strict'

const express = require('express')
const router = express.Router()
const Product = require('../models/product-schema')

router.route('/product').get((req, res) => {
  res.send('Hello World!')
})

module.exports = router
