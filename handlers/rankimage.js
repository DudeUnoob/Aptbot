const { mongooseConnectionString } = require('../botconfig/config.json')
const mongoose = require('mongoose')

mongoose.connect(mongooseConnectionString)

module.exports = mongoose.model(
  "rank-image",
  new mongoose.Schema({
    User: String,
    ImageURL: String,
  })
);