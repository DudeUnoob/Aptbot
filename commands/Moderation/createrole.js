const Discord = require('discord.js')

module.exports = {
    name:'createrole',
    aliases:['rolecreate','crole','rcreate'],
    category:'Moderation',
    memberpermissions:['MANAGE_GUILD'],
    usage: '<prefix>createrole <rolename> <hexcodecolor>',

    run: async(client, message, args) => {

        let roleName = args[0]
        let color = args[1]
        if(!roleName){
            return message.reply('Please specify a name you want for the new role!')
        }
        if(!color){
            return message.reply('Please specify a hex code color you want for the new role! ex: #69F699')
        }

        
        message.guild.roles.create({
            name: roleName,
            color: color,
        }).then(
           message.reply({
               embeds:[
                   new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(`New role: **${roleName}** created!`)
               ]
           })
        )
        

    }
}