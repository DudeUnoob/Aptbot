const Schema = require('../../handlers/leaveChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'setleave-channel',
  memberpermissions:['ADMINISTRATOR'],
  category:'Welcome-Channel',
  aliases:['leave-channel','leave-channel-set','s-lc'],
  description:'Sets the leave channel in your server',

  run: async(client, message, args) => {
    
    const channel = message.mentions.channels.first();
    if(!channel) return message.reply('Please mention a valid text channel');
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data){
          data.Channel = channel.id;
          data.save()
      } else{
        new Schema({
          Guild: message.guild.id,
          Channel: channel.id,
        }).save();
      }
      message.reply(`${channel} has been set as leave channel`);
    })
  }
}