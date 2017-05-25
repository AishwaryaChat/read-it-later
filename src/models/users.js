const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
  id: String,
  name: String,
  emailID: String,
  password: String
})

const Users = mongoose.model('Users', usersSchema)

module.exports = Users
