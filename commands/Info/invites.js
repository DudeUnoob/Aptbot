const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "check-invites",
  aliases: ["invite-check"],
  description: "Check your invites in the server!",
  usage: "<prefix>check-invites @member",
  category:'Info',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {string[]} args
   */
  run: async (client, message, args) => {

    let user = message.mentions.users.first() || message.author
    let invites = await message.guild.invites.fetch();
    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

    if(userInv.size <= 0) {
        return message.channel.send(`${user.username} doesn't have any invites`)
    }

    let invCodes = userInv.map(x => x.code).join('\n')
    let i = 0;
    userInv.forEach(inv => i += inv.uses)

    const embed = new MessageEmbed()
    .setTitle(`${user.username} Invites`)
    .addField('User Invites', i.toString())
    .addField('Invite Codes', invCodes.toString())
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send({embeds: [embed]})
    
 }
};