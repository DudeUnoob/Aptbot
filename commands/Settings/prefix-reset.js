const prefixSchema = require('../../handlers/prefix')
const { prefix } = require('../../botconfig/config.json')
const { confirmation } = require('@reconlx/discord.js')

module.exports = {
    name : 'prefix-reset',
    description:'resets the prefix in the server to $',
    category:'Settings',
    memberpermissions:['MANAGE_GUILD'],
    run : async(client, message) => {
        message.channel.send("Are you sure you want to reset the prefix?").then(async (msg) => {
            
            
                msg.delete()
                await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
                message.channel.send(`The prefix has been reset to ${prefix}`)
            
            
                
            
        })

    }
}