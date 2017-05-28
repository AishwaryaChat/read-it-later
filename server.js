const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()
const session = require('express-session')
const uuid = require('node-uuid')

const server = express()
const controllers = require('./src/controllers')
const {obj} = require('./config')
const sess = {
  uniqID: uuid(),
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 60000
  }
}

server.use('/materialize', express.static(path.join(__dirname, '/node_modules/materialize-css/dist')))
server.use('/io-square', express.static(path.join(__dirname, '/node_modules/io-square-browser/lib')))
server.use('/styles', express.static(path.join(__dirname, '/public/views/styles')))
server.use('/images', express.static(path.join(__dirname, '/public/views/images')))
server.use(express.static('build'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(session(sess))

// Databse Connection
mongoose.connect(`mongodb://${obj.hostName}:${obj.portNumber}/${obj.dbName}`)
const db = mongoose.connection
mongoose.Promise = require('promise')
db.on('error', console.error.bind(console, 'db connection error:'))
db.once('open', (err) => {
  if (err) {
    throw new Error('Db not connected')
  }
  server.listen(process.env.PORT || 3000)
  console.log('DB connected successfully and APP listening at: ' + Date())
})

// Routes for the server
server.get('/sources', controllers.sources.get)
server.get('/categories', controllers.categories.get)
server.get('/fetchSources/:cat', controllers.fetchSources.get)
server.get('/', (req, res) => {
  if (req.session.user_id) {
    res.sendFile(path.join(__dirname, '/public/app.html'))
  } else {
    res.sendFile(path.join(__dirname, '/public/views/html/index.html'))
  }
})
server.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/html/signup.html'))
})
server.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/html/login.html'))
})
server.post('/addUser', controllers.users.addUser)
server.post('/checkUser', controllers.users.checkUser)
