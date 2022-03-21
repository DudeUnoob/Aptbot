const { mongooseConnectionString } = require('../botconfig/config.json')

const mongoose = require('mongoose');
mongoose.connect(mongooseConnectionString)

module.exports = mongoose.model(
    "welcomeImage",
    new mongoose.Schema({
        Guild: String,
        ImageURL: String,
    })
)