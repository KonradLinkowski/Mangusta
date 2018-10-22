'use strict'
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const config = require('../../config')
const jwt = require('jsonwebtoken')
const SALT_WORK_FACTOR = 10


const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  firstName: String,
  lastName: String,
  email: { type: String, index: true, unique: true },
  password: { type: String, required: true },
  creation: { type: Date, default: Date.now() },
  lastLogin: { type: Date },
  role: { type: Number, default: 0 }
})

const hashPassword = function(next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next()
  }
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (saltError, salt) => {
    if (saltError) {
      return next(saltError)
    }
    // hash the password using new salt
    bcrypt.hash(this.password, salt, (hashingError, hash) => {
      if (hashingError) {
        return next(hashingError)
      }
      // override the cleartext password with the hashed one
      this.password = hash
      next()
    })
  })
}

const comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      cb(err)
      return
    }
    cb(null, isMatch)
  })
}

const generateToken = function(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 3600
  })
}

UserSchema.pre('save', hashPassword)

UserSchema.methods.comparePassword = comparePassword
UserSchema.methods.generateToken = generateToken

const User = mongoose.model('user', UserSchema, 'users')

module.exports = User