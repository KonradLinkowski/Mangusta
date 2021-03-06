'use strict'
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // dunno if it will work like that
  price: {
    type: Number,
    required: true,
    min: 0.01,
    max: 10000,
    validate: {
      validator: price => price.toString().split('.')[1].length === 2,
      message: props => `${props.value} is not a valid price!`
    }
  },
  description: String,
  creation: { type: Date, default: new Date().toISOString() },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    max: 10000,
    validate: {
      validator: Number.isInteger,
      message: props => `${props.value} is not a valid quantity!`
    }
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    validate: {
      validator: mongoose.Types.ObjectId.isValid,
      message: props => `${props.value} is not a valid user id!`
    }
  },
  category: [String],
  isDeleted: { type: Boolean, default: false }
})

const Product = mongoose.model('product', ProductSchema, 'products')

module.exports = Product
