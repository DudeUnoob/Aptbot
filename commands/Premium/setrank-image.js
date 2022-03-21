const Discord = require('discord.js')
const canvacord = require('canvacord')
const rankImg = require('../../handlers/rankimage')

module.exports = {
    name:'rankimage',
    description:'set a custom rank image card for yourself!',
    aliases:['set-rankimage','rankimage-set','rankimg'],
    usage:'set a custom rank image card for yourself, imgur files highly recommended like this: https://i.imgur.com/8oAzl0j.png',
    category:'Premium',
    premium: true,

    run: async(client, message, args) => {
        
        let member = message.author;
        const res = await args.join(" ")
        if(!res){
            return message.reply('Please specify an image address link (imgur link) that you want, for ex: https://i.imgur.com/8oAzl0j.png')
        }
        rankImg.findOne({ User : member.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                await rankImg.findOneAndDelete({ User : member.id })
                data = new rankImg({
                    User : member.id,
                    ImageURL : res
                })
                data.save()
                message.channel.send(`**Your image has been saved as ${res}**`)
            } else {
                data = new rankImg({
                    User : member.id,
                    ImageURL : res
                })
                data.save()
                message.channel.send(`Custom img is set to **${res}**`)
            }
        })

        
    }

}
