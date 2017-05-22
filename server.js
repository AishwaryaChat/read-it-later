const express = require('express')
const mongoose = require('mongoose')

const server = express()

mongoose.connect('mongodb://localhost:27017/tldrdb')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'db connection error:'))
db.once('open', (err) => {
  if (err) {
    throw new Error('Db not connected')
  }
  server.listen(process.env.PORT || 3000)
  console.log('DB connected successfully and APP listening at: ' + Date())
})
