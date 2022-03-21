const { Client, Message, MessageEmbed } = require('discord.js');
const client = require('../../index')


module.exports = {
    name: 'addmoney',
    memberpermissions:['ADMINISTRATOR'],
    category:'Economy',
    description:'Adds money to the specified member',
    category:'Economy',
    

    run: async(client,message,args) => {
       

        let member = message.mentions.members.first() || message.member

        client.add(member.id, parseInt(args[0]))

        message.channel.send('Added balance')
        
        

        
        
    
}
}