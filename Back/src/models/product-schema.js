'use strict'
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  creation: { type: Date, default: Date.now() },
  quantity: { type: Number, required: true },
  category: [String],
  isDeleted: { type: Boolean, default: false }
})

const Product = mongoose.model('product', ProductSchema, 'products')

module.exports = Product
