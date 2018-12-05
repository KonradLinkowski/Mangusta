'use strict'
const router = require('express').Router()
const Product = require('../models/product-schema')
const Tags = require('../models/tag-schema')

router.route('/product').get(async(req, res) => {
    const search = req.query.search || ''
    // każdy produkt ma mieć domyślnie TAG product
    //   dzięki temu można je wyszukiwa bez podania tagu
    const tags = (await Tags.find()).map(tag => tag.name)
    const category = req.query.category || [...tags]
    const priceMin = req.query.priceMin || 0
    const priceMax = req.query.priceMax || Number.MAX_SAFE_INTEGER
    const dir = req.query.dir || 1

    res.json(await Product.find({
        name: { '$regex': search, '$options': 'i' },
        price: { '$gte': priceMin, '$lte': priceMax },
        category: { '$in': category }
    }).sort({ price: dir }))
})

router.route('/product').post(async(req, res) => {
    if (!req.body) {
        return res.status(422).send('Pass body')
    }
    if (!req.body.name || !req.body.price || !req.body.quantity) {
        return res.status(422).send('Pass name, price and quantity')
    }
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity,
        category: req.body.category
    })
    try {
        await newProduct.save()
        console.log(newProduct)
    } catch (err) {
        return res.status(500).send('Internal server error')
    }
    return res.status(201).send('Product created')
})

module.exports = router