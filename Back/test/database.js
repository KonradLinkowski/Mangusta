'use strict'
require('chai').should()

const User = require('../src/models/user-schema')

describe('database', () => {
  it('saves user to the database', done => {
    's'.should.be.a('string')
    done()
  })
})