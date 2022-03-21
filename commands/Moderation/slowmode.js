const Discord = require('discord.js')

module.exports = {
    name:'slowmode',
    aliases:['sm','slowm'],
    memberpermissions:['MANAGE_GUILD'],
    description:'set the slowmode for the channel',
    category:'Moderation',
    usage: '<prefix>slowmode <seconds>',

    run: async(client, message, args) => {

        let duration = args[0]

        if(!duration) return message.reply('Please specify the slowmode duration per message in seconds')

        const { channel } = message;

        const reason = args.slice(1).join(" ")

        channel.setRateLimitPerUser(duration, reason)

        client.modlogs2({
            Action:'Slowmode Activated',
            Author: client.user.tag,
            Reason:`Slowmode activated in ${channel.name} by ${message.author.name}`,
            Color:'YELLOW',
            Member: message.user
        }, message)
    }
}