const Discord = require('discord.js')

module.exports = {
    name:'memberinfo',
    category:'Info',
    description:'shows the roles for the member',

    run: async(client, message, args) => {
        
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

        if(!member) return message.reply('Please specify a member')

        const memberRoles = member.roles.cache
            .filter((roles) => roles.id !== message.guild.id)
            .map((role) => role.toString())

        let roleEmbed = new Discord.MessageEmbed()
            .setAuthor({name: member.user.tag, iconURL: member.user.displayAvatarURL({ dynamic: true })})
            .setDescription(`${member}'s roles => ${memberRoles}`)
            .setColor('RANDOM')

        message.channel.send({embeds: [roleEmbed]})
    }
}