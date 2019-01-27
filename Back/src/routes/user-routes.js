'use strict'
const express = require('express')
const router = express.Router()
const User = require('../models/user-schema')
const dictionary = require('../store/dictionary.json')


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
    const savedUser = await user.save()
    response.set({
      "x-auth-token": await savedUser.generateToken(),
      "user": JSON.stringify(savedUser)
    })
    response.status(201).send(dictionary.success_list.default)
    // response.send(dictionary.success_list.default)
  } catch (error) {
    response.status(400).send(dictionary.error_list.email_taken)
    console.log(error)
  }
})


router.route('/auth/login').post((req, res) => {
  const userData = req.body
  User.findOne({
    email: userData.email
  }, (err, user) => {
    if (err) {
      res.status(500)
      console.log(err)
    } else if (user) {
      user.comparePassword(userData.password, (compareErr, isMatched) => {
        if (compareErr) {
          console.log(compareErr)
        } else if (isMatched) {
          res.status(200)
          res.json({
              "x-auth-token": user.generateToken(user)
          })
        } else {
         res.status(401).send(dictionary.error_list.invalid_password)
        }
      })
    } else {
      res.status(401).send(dictionary.error_list.email_not_found)
    }
  })
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