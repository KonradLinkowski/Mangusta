'use strict'

const express = require('express')
const router = express.Router()
const Product = require('../models/product-schema')

router.route('/product').get(async(req, res) => {
  const search = req.query.search || ''
  const categories = req.query.categories || ['']
  const priceMin = req.query.priceMin || 0
  const priceMax = req.query.priceMax || Number.MAX_VALUE
  const sort = req.query.sort
  const dir = req.query.dir

  // for (let i = 0; i < 100; i++) {
  //   const product = {
  //     price: i,
  //     name: 'big old table',
  //     description: 'Very old',
  //     quantity: 100-i,
  //     category: ['furniture', 'kitchen']
  //   }
  //   const schema = new Product(product)
  //   try {
  //     await schema.save()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  res.json(await Product.find({
    name: { '$regex' : search, '$options' : 'i' },
    price: { '$gte' :  priceMin, '$lte' :  priceMax},
    category: {'$in': ['furniture']}
  }))
})

module.exports = router
