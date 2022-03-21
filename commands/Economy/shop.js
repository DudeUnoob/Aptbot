const { Client, Message, MessageEmbed } = require('discord.js')
const items = require('../../shopItems')

module.exports = {
    name: 'shop',
    description:'check out the shop to see things you want to buy!',
    category:'Economy',

    run: async(client, message, args) => {
        
        if(items.length === 0) return message.reply('There is no items for sale!')

        const shopList = items
            .map((value, index) => {
                return `**${index + 1})** ${value.item} -> ${value.price}:coin: \n`
            });

        message.channel.send({ content: `${shopList}` })
    }
}