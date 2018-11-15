'use strict'
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../src/models/user-schema')
const config = require('config')

module.exports = function(passport) {
  const opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
  opts.secretOrKey = config.get('jwt')
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.id }, (err, user) => {
      if (err) {
        return done(err, false)
      }
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  }))
}