const { mongooseConnectionString } = require('../botconfig/config.json')
const mongoose = require('mongoose')

mongoose.connect(mongooseConnectionString)

module.exports = mongoose.model(
    "rank-words",
    new mongoose.Schema({
        Guild: String,
        Sentence: String,
    })
)
