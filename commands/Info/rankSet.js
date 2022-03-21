const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require("../../handlers/rankChannel");

module.exports = {
  name: "rank-channel",
  aliases:['set-ranking','ranking-channel'],
  memberpermissions:['ADMINISTRATOR'],
  category:'Info',
  description:'Sets the rank channel in the server',
  usage:'<prefix>rank-channel #channel',


  run: async(client, message, args) => {
    const channel = message.mentions.channels.first() || message.channel;

    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) data.delete();
      new Schema({
        Guild: message.guild.id,
        Channel: channel.id,
      }).save();
      message.channel.send(`${channel} has been saved as the rank channel!`)
    })

  }  
}