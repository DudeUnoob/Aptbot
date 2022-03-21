const { mongooseConnectionString } = require('../botconfig/config.json')
const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
mongoose.connect(mongooseConnectionString)

const autorole = new mongoose.Schema({
    guild: String,
    role: String
})

module.exports = mongoose.model("autorole", autorole);