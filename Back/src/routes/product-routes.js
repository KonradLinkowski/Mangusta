'use strict'

const express = require('express')
const router = express.Router()
const Product = require('../models/product-schema')

router.route('/product').get(async(req, res) => {
  const search = req.query.search
  const categories = req.query.categories
  const priceMin = req.query.priceMin
  const priceMax = req.query.priceMax
  const sort = req.query.sort
  const dir = req.query.dir

  // !priceMin = 0
  // !priceMax = Number.MAX_VALUE

  for (let i = 0; i < 100; i++) {
    const product = {
      price: Math.random(),
      name: 'Cool ironing tool',
      description: 'Very suitable',
      quantity: Math.random(),
      category: ['agd', 'rtv', 'kitchen', 'ironing']
    }
    const schema = new Product(product)
    try {
      await schema.save()
    } catch (err) {
      console.log(err)
    }
  }

  res.json(await Product.find({
    name: { '$regex' : search, '$options' : 'i' }
  }))
})

module.exports = router
