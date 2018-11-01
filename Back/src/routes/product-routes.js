'use strict'

const express = require('express')
const router = express.Router()
const Product = require('../models/product-schema')

router.route('/product').get(async (req, res) => {
    const search = req.query.search || ''
    // ka¿dy produkt ma mieæ domyœlnie TAG product, 
    //   dziêki temu mo¿na je wyszukiwaæ bez podania tagu
    const category = req.query.category || ['product']
    const priceMin = req.query.priceMin || 0
    const priceMax = req.query.priceMax || Number.MAX_VALUE
    const dir = req.query.dir || 1

    res.json(await Product.find({
        name: { '$regex': search, '$options': 'i' },
        price: { '$gte': priceMin, '$lte': priceMax },
        category: { '$in': category }
    }).sort({ price: dir }))
})

module.exports = router
