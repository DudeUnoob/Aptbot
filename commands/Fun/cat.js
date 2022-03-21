const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
  
    name: "cat",
    aliases: ["kitten", "kitty", "pussy"],
    category: "Fun",
    description: "Sends a random cat image !!",
    usage: `<prefix>cat`,

    run: async (client, message, args) => {

    const res = await fetch('https://some-random-api.ml/img/cat');
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
    .setTitle(`🐈 Meow !!! 🐈`)
    .setImage(img)
    .setFooter({text: `Requested ${message.member.displayName}`,  iconURL: message.author.displayAvatarURL({ dynamic: true })})
    .setTimestamp()
    .setColor('RANDOM');
    message.channel.send({embeds: [embed]});
  }
}