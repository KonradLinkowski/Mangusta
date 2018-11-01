'use strict'
const should = require('chai').should()

const config = require('config')
const mongoose = require('mongoose')
const User = require('../src/models/user-schema')
const Product = require('../src/models/product-schema')

describe('database', () => {
  it('should connect to the database', async() => {
    try {
      await mongoose.connect(
        config.get('database.dev'),
        { useNewUrlParser: true }
      )
    } catch (err) {
      should.not.exist(err)
    }
  })

  const userEmail = 'testmail@example.com'
  it('should delete user if exists', async() => {
    try {
      // check if user exists
      const myUser = await User.findOne({ email: userEmail })
      if (myUser) {
        // if exists delete it
        await User.findByIdAndDelete(myUser._id)
      }
    } catch (err) {
      should.not.exist(err)
    }
  })
  it('saves user to the database', async() => {
    const username = 'sampleusername'
    const password = 'verystrongpassword'
    // create new user
    const myUser = User({
      username: username,
      email: userEmail,
      password: password
    })

    try {
      // save it
      await myUser.save()
    } catch (err) {
      should.not.exist(err)
    }
    myUser.password.should.not.equal(password)
    myUser.username.should.equal(username)
    myUser.email.should.equal(userEmail)
  })

  it('correctly hashes passwords', async() => {
    const email = 'email@mail.com'
    const username = 'sampleusername'
    const password = 'lolxd'
    const user = User({
      username: username,
      email: email,
      password: password
    })
    // deletes user
    await User.findOneAndDelete({ email })
    try {
      // saves user
      await user.save()
    } catch (err) {
      should.not.exist(err)
    }

    // check if passwors has been hashed
    user.password.should.not.equal(password)
    user.comparePassword(password, (err, isMatch) => {
      should.not.exist(err)
      isMatch.should.equal(true)
    })
    user.comparePassword('someweakpassword', (err, isMatch) => {
      should.not.exist(err)
      isMatch.should.equal(false)
    })
    await User.findByIdAndDelete(user._id)
  })

  it('creates product in database', async() => {
      const product = {
      price: Math.random(),
      name: 'Cool ironing tool',
      description: 'Very suitable',
      quantity: 10,
      category: ['product','agd', 'rtv', 'kitchen', 'ironing']
    }
    const schema = new Product(product)
    let error = null
    try {
      await schema.save()
    } catch (err) {
      error = err
      }
    should.not.exist(error)
  })
})