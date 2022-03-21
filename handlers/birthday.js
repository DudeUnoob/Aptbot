const { mongooseConnectionString } = require('../botconfig/config.json')

const mongoose = require('mongoose');
mongoose.connect(mongooseConnectionString)

let Schema = new mongoose.Schema({
    User: String,
    Birthday: String,
})

module.exports = mongoose.model('birthday', Schema)