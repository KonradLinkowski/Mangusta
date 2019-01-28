'use strict'
const express = require('express')
const router = express.Router()
const User = require('../models/user-schema')
const Product = require('../models/product-schema')
const dictionary = require('../store/dictionary.json')
const bcrypt = require('bcryptjs')


router.route('/auth/register').post(async(request, response) => {
  const data = request.body
  const user = new User({
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password
  })
  try {
    await user.save()
    // response.set({
    //    // await savedUser.generateToken(),
    //   "x-auth-token": 'sowa',
    //   "user": JSON.stringify(savedUser)
    // })
    response.status(201).send(dictionary.success_list.default)
    // response.send(dictionary.success_list.default)
  } catch (error) {
    response.status(400).send(dictionary.error_list.email_taken)
    console.log(error)
  }
})


router.route('/auth/login').post((request, response) => {
  const data = request.body

  try {
    User.findOne({ username: data.username })
    .exec((err, userFound) => {
      if (err) {
        // no user with such login
        response.status(404).send(dictionary.error_list.invalid_password)
      } else if (!userFound) {
        // no user
        response.status(404).send(dictionary.error_list.invalid_password)
      }
      bcrypt.compare(data.password, userFound.password, (error, result) => {
        if (result === true) {
          response.json({
            // user.generateToken(user)
              "x-auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
              "user": JSON.stringify(userFound)
          })
          response.status(200)
        } else {
          console.log(error)
          response.status(404).send(dictionary.error_list.invalid_password)
        }
      })
    })
  } catch (error) {
    console.log('no user have this login', error)
    response.status(404).send(dictionary.error_list.default)
  }
})


router.route('/auth/logout').post((request, response) => {
  const data = request.body
})


router.route('/users/find/:email').get((req, res) => {
  User.findOne({
      email: req.params.email
    }).then(result => {
      if (result === null) {
        res.status(404).send(dictionary.error_list.email_not_found)
      } else {
        res.status(200).send(dictionary.success_list.default)
      }
    })
    .catch(err => {
      console.log(err)
    })
})

router.route('/user/:id/product').get((req, res) => {
  User.findById(req.params.id)
  .then(result => {
    if (result === null) {
      res.status(404).send(dictionary.error_list.email_not_found)
    } else {
      Product.find({ userId: req.params.id })
      .then(productList => {
        res.json(productList)
      })
      .catch(error => {
        console.log('product list error: ', error)
        res.status(400)
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router


// old version from @AdamBorys -> leaving it 4 now
// router.route('/users/register').post((req, res) => {
//   const user = new User()

//   user.email = req.body.email
//   user.setPassword(req.body.password)

//   user.save((err, savedUser) => {
//     if (err) {
//       res.status(500)
//       console.log(err)
//     } else {
//       res.status(201)
//       res.json({
//         "token": savedUser.generateToken()
//       })
//     }
//   })
// })