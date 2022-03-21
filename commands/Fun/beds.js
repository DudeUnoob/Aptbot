const Discord = require("discord.js");

module.exports = {
  name: "bed",
  aliases: [""],
  category: "Fun",
  description: "Shows image in beds",
  usage: "bed <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send("Please mention or give ID of a member!")

    const Embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Bed")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/bed?user1=${message.author.avatarURL({ format: "png" })}&user2=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send({embeds: [Embed]});
  }
};