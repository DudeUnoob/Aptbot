const Schema = require('../../handlers/leaveChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'check-leavechannel',
  aliases:['check-leave-channel','channel-leave','c-lc'],
  memberpermissions:['ADMINISTRATOR'],
  category:'Welcome-Channel',
  description:'Checks the leave channel in your server',

  run: async(client, message, args) => {
    
    // const channel = message.mentions.channels.first();
    // if(!channel) return message.reply('Please mention a valid text channel');
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(!data) return message.reply('This guild has no data stored');

        const channel = client.channels.cache.get(data.Channel);

        message.reply(`Leave Channel => ${channel}`);
    })
  }
}