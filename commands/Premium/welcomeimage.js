const Discord = require('discord.js')
const Schema = require('../../handlers/welcomeImage')

module.exports = {
    name: 'welcomeimage',
    description:'Set the welcome image for a new member in the server!',
    memberpermissions:['ADMINISTRATOR'],
    category:'Premium',
    usage:'<prefix>welcomeImage <imageURL>',
    premium: true,

    run: async(client, message, args) => {

        let guild = message.guild.id;
        let res = args.join(" ")
        if(!res){
            return message.reply('Please send a image url link to set for the welcom image')
        }

        Schema.findOne({ Guild: guild, }, async(err, data) => {
            if(err) throw err;
            if(data){
                await Schema.findOneAndDelete({ Guild: guild })
                data = new Schema({
                    Guild: guild,
                    ImageURL: res
                })
                data.save()
                message.channel.send(`Your welcome image has been saved as ${res}`)
            } else {
                data = new Schema({
                    Guild: guild,
                    ImageURL: res
                })
                data.save()
                message.channel.send(`Custom img is set to **${res}**`)
            }
        })
    }
}

