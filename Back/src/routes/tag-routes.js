'use strict'

const express = require('express')
const router = express.Router()
const Tag = require('../models/tag-schema')

router.route('/tag').get(async(req, res) => {
  try {
    return res.status(200).json((await Tag.find()).map(tag => tag.name))
  } catch (err) {
    return res.status(500).send('Internal server error')
  }
})

router.route('/tag/search').get(async(req, res) => {
  const term = req.query.term || ''
  try {
    return res.status(200).json(await Tag.find({
      name: { '$regex': term, '$options': 'i' }
  }))
  } catch (err) {
    return res.status(500).send('Internal server error')
  }
})

module.exports = router
