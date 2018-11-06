'use strict'

const express = require('express')
const router = express.Router()
const Tag = require('../models/tag-schema')

router.route('/tag').get(async(req, res) => {
  const search = req.query.search || ''
  // const tag = {
  //   name: 'tree'
  // }
  // const schema = new Tag(tag)
  // try {
  //   await schema.save()
  // } catch (err) {
  //   console.log(err)
  // }

  res.json(await Tag.find({
      name: { '$regex': search, '$options': 'i' }
  }))
})

module.exports = router
