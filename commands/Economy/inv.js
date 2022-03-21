const inventory = require('../../handlers/inventory')


const client = require('../../index')
module.exports = {
    name:'inventory',
    aliases:['inv'],
    description:'Check out your inventory per server!',
    Category:'Economy',

    run: async(client,message,args) => {
        
        inventory.findOne({ Guild: message.guild.id, User: message.author.id }, async(err, data) => {
            if(!data) return message.channel.send('You inventory is empty!')
            const mappedData = Object.keys(data.Inventory).map((key) => {
                return `${key}(${data.Inventory[key]})\n`
            }).join("\n")
        message.channel.send(mappedData)
        })


    }
}