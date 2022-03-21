const db = require('quick.db')
const premiumSchema = require('../../handlers/premium')
const Discord = require('discord.js')

module.exports = {
  name:'check-premium',


  run: async(client,message,args) => {

    let member = message.mentions.members.first() || message.author;
    premiumSchema.findOne({ User: member.id }, async(err, data) => {
      if(!data) return message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('This member does not have premium!, get it here! https://www.patreon.com/DomK')
    ]}) 

      if(data) return message.reply({embeds: [new Discord.MessageEmbed()
      .setColor('GREEN')
    .setDescription('This member has premium!')]})
    })

  }
}