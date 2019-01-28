'use strict'
const router = require('express').Router()
const Product = require('../models/product-schema')
const Tags = require('../models/tag-schema')
const mongoose = require('mongoose')

router.route('/product').get(async(req, res) => {
    const search = req.query.search || ''
    // każdy produkt ma mieć domyślnie TAG product
    //   dzięki temu można je wyszukiwa bez podania tagu
    const category = req.query.category || null
    const priceMin = req.query.priceMin || 0
    const priceMax = req.query.priceMax || Number.MAX_SAFE_INTEGER
    const dir = req.query.dir || 1

    if (category) {
        res.json(await Product.find({
            name: { '$regex': search, '$options': 'i' },
            price: { '$gte': priceMin, '$lte': priceMax },
            category: { '$in': category }
        }).sort({ price: dir }))
    } else {
        res.json(await Product.find({
            name: { '$regex': search, '$options': 'i' },
            price: { '$gte': priceMin, '$lte': priceMax }
        }).sort({ price: dir }))
    }
})

router.route('/user/products/:id').get(async(req, res) => {
    const search = req.query.search || ''
    // każdy produkt ma mieć domyślnie TAG product
    //   dzięki temu można je wyszukiwa bez podania tagu
    const category = req.query.category || null
    const priceMin = req.query.priceMin || 0
    const priceMax = req.query.priceMax || Number.MAX_SAFE_INTEGER
    const dir = req.query.dir || 1
    const owner = req.params.id
    if (!mongoose.Types.ObjectId.isValid(owner)) {
        return res.json({ msg: 'Invalid user id' })
    }
    try {
        if (category) {
            res.json(await Product.find({
                name: { '$regex': search, '$options': 'i' },
                price: { '$gte': priceMin, '$lte': priceMax },
                category: { '$in': category },
                owner
            }).sort({ price: dir }))
        } else {
            res.json(await Product.find({
                name: { '$regex': search, '$options': 'i' },
                price: { '$gte': priceMin, '$lte': priceMax },
                owner
            }).sort({ price: dir }))
        }
    } catch (error) {
        // console.error(error)
        res.json({ error })
    }
})

router.route('/product/:id').get(async(req, res) => {
    console.log(req.params)
    res.json(await Product.findById(req.params.id))
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
        userId: req.body.userId,
        description: req.body.description,
        quantity: req.body.quantity,
        category: req.body.category
    })
    try {
        await newProduct.save()
    } catch (err) {
        return res.status(422).send('Wrong product structure.')
    }
    return res.status(201).send(newProduct)
})

module.exports = router