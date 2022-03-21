const { mongooseConnectionString } = require('../botconfig/config.json')
const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
mongoose.connect(mongooseConnectionString)

module.exports = model(
  'rankChannel', 
  new Schema({ 
    Guild: String,
    Channel: String,
  })
);  
