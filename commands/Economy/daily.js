// const Discord = require("discord.js");
// const db = require("quick.db");
// const ms = require('ms');


// module.exports = {
//   name: "daily",
//   aliases: [],
//   category:'Economy',
//   description: 'Get your daily bonus!',
  
//   run: async(client, message, args) => {
//   let user = message.author;

//   let timeout = 86400000;
//   let amount = 200;

//   let daily = await db.fetch(`daily_${message.author.id}`);

//   if (daily !== null && timeout - (Date.now() - daily) > 0) {
//     let time = ms(timeout - (Date.now() - daily));

  
//     let timeEmbed = new Discord.MessageEmbed()
//     .setColor("RANDOM")
//     .setDescription(`:x: You've already collected your daily reward\n\nCollect it again in ${time}`);
//      message.channel.send({embeds: [timeEmbed]});
//   } else {
//     let moneyEmbed = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:white_check_mark: You've collected your daily reward of ${amount} coins`);
//    message.channel.send({embeds: [moneyEmbed]});
//   db.add(`money_${message.author.id}`, amount)
//   db.set(`daily_${message.author.id}`, Date.now())

  


//   }
// }}