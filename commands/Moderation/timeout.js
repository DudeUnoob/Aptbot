const parseTime = require('parse-duration').default
const prettyMs = require('pretty-ms')
const ms = require('ms')
module.exports = {
    name:'mute',
    description:'mutes a user',
    usage:'<prefix>mute @member 2m (mutes a member for 2 minutes, you can do days(d), hours(h))',
    category:'Moderation',
    memberpermissions:['MODERATE_MEMBERS'],

    run: async(client,message,args) => {
        if(message.author.bot) return;
        let bruh = message.author
        const reason = args.slice(2).join(" ") || "No reason provided"
        //if (message.author) return;
        //let user = message.mentions.users.first().username;

        let member = message.mentions.members.first()
        if(!member) return message.reply('Please specify a member you want to mute/timeout with the given duration!')
        if(!member.moderatable) return message.reply('Unable to timeout this user')

        let time = args.slice(1).join(" ")
        if(!time) return message.reply('Input the time')

        let parsedTime = parseTime(time)

        if(parsedTime < ms("1m") || parsedTime > ms("28d")){
            return message.reply('The input of time is out of limit')
        }

        client.modlogs({
            Member: member,
            Action: 'Mute',
            Color: "ORANGE",
            Reason: reason,
            Author: bruh,
          }, message)
        await member.timeout(parsedTime)
        return message.reply(`${member.user.tag} has been timed out for about **${prettyMs(parsedTime, {verbose: true})}**`)

        

        
    }
    
}