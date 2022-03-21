
//requiring the package
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'afk',
    description:'set an afk message for yourself!',
    category:'Info',
    run : async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`You have been set to afk\n**Reason :** ${content}`)
        .setColor("GREEN")
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic : true })})
        message.channel.send({embeds: [embed]})                
    }
}