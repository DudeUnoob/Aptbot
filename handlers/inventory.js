const { mongooseConnectionString } = require('../botconfig/config.json')
const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
mongoose.connect(mongooseConnectionString)

module.exports = model('inventory', new Schema({
    Guild: String,
    User: String,
    Inventory: Object, 
})
)