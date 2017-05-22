const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a schema
const sourcesSchema = new Schema({
  id: String,
  name: String,
  description: String,
  url: String,
  category: String,
  language: String,
  country: String,
  urlsToLogos: {
    small: String,
    medium: String,
    large: String
  },
  sortBysAvailable: [],
  fetchdata: Boolean
})

// create a mongoose model using schema
const Sources = mongoose.model('Sources', sourcesSchema)

module.exports = Sources
