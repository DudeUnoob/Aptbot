const parseTime = require('parse-duration').default
const prettyMs = require('pretty-ms')
const ms = require('ms')
module.exports = {
    name:'unmute',
    description:'unmutes a user',
    usage:'<prefix>unmute @member',
    category:'Moderation',
    memberpermissions:['MODERATE_MEMBERS'],

    run: async(client,message,args) => {
        if(message.author.bot) return;
        let bruh = message.author
        const reason = args.slice(1).join(" ") || "No reason provided"
        //if (message.author) return;
        //let user = message.mentions.users.first().username;

        let member = message.mentions.members.first()
        if(!member) return message.reply('Please specify a member you want to mute/timeout with the given duration!')
        if(!member.moderatable) return message.reply('Unable to timeout this user')

        member.timeout(null)

        client.modlogs({
            Member: member,
            Action: 'Unmute',
            Color: "GREEN",
            Reason: reason,
            Author: bruh,
          }, message)
    

        
    }
    
}