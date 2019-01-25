'use strict'
const express = require('express')
const router = express.Router()
const User = require('../models/user-schema')
const dictionary = require('../store/dictionary.json')


router.route('/users/register').post((request, response) => {
  const data = request.body
  const user = new User()
  User.findOne({
    email: data.email
  }, (error, userFound) => {
    if (userFound) {
      response.status(400).send(dictionary.error_list.email_taken)
    } else if (error) {
      user.save((userSaveError, savedUser) => {
        if (userSaveError) {
          response.status(500).send(dictionary.error_list.default)
        } else {
          response.status(201).send(dictionary.success_list.default)
          response.json({
            "x-auth-token": savedUser.generateToken(),
            "user": savedUser
          })
        }
      })
    } else {
      response.status(500).send(dictionary.error_list.default)
    }
  })
})


router.route('/users/login').post((req, res) => {
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


router.route('/users/logout').post((request, response) => {
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