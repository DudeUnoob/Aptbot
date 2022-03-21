const { mongooseConnectionString } = require('../botconfig/config.json')

const mongoose = require('mongoose');
mongoose.connect(mongooseConnectionString)

let Schema = new mongoose.Schema({
    Guild : String,
    Prefix : String, 
})

module.exports = mongoose.model('prefix', Schema)