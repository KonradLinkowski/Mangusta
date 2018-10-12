'use strict'
const path = require('path')
// change config location
process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config')
const config = require('config')

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})