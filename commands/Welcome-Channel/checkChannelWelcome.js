const Schema = require('../../handlers/welcomeChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'check-welcomechannel',
  aliases:['check-welcome-channel','channel-welcome','c-wc'],
  memberpermissions:['ADMINISTRATOR'],
  category:'Welcome-Channel',
  description:'Checks the welcome channel in your server',

  run: async(client, message, args) => {
    
    // const channel = message.mentions.channels.first();
    // if(!channel) return message.reply('Please mention a valid text channel');
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(!data) return message.reply('This guild has no data stored');

        const channel = client.channels.cache.get(data.Channel);

        message.reply(`Welcome Channel => ${channel}`);
    })
  }
}