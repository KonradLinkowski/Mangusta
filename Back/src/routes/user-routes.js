'use strict'

const express = require('express')
const router = express.Router()
const User = require('../models/user-schema')

router.route('/users/register').post((req, res) => {
  const user = new User()

  user.email = req.body.email
  user.setPassword(req.body.password)

  user.save((err, savedUser) => {
    if (err) {
      res.status(500)
      console.log(err)
    } else {
      res.status(201)
      res.json({
        "token": savedUser.generateToken()
      })
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
              "token": user.generateToken(user)
          })
        } else {
         res.status(401).send('Invalid password')
        }
      })
    } else {
      res.status(401).send('E-mail not found')
    }
  })
})

// status 200 dla nieistniejącego / 202 dla istniejącego
router.route('/users/find/:email').get((req, res) => {
  User.findOne({
      email: req.params.email
    }).then(result => {
      if (result === null) {
        res.status(200).send()
      } else {
        res.status(202).send()
      }
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router