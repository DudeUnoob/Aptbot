const inventory = require('../../handlers/inventory')
const items = require('../../shopItems')
const client = require('../../index')
module.exports = {
    name:'buy',

    run: async(client,message,args) => {
        
        if(!args[0]) return message.channel.send('Please specify what you want to buy!')
        
        const itemToBuy = args[0].toLowerCase()

        const validItem = !!items.find((val) => val.item.toLowerCase() === itemToBuy);
        if(!validItem) return message.reply('The item that you wanted is not valid');

        const itemPrice = items.find((val) => (val.item.toLowerCase()) === itemToBuy).price;

        const userBalance = await client.bal(message.author.id);

        if(userBalance < itemPrice) return message.reply(`You only have ${userBalance}:coin:, the price of the item is ${itemPrice}:coin:`)

        const params = {
            Guild: message.guild.id,
            User: message.author.id
        }
        inventory.findOne(params, async(err,data) => {
            if(data){
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy);
                if(!hasItem){
                    data.Inventory[itemToBuy] = 1;
                }else{
                    data.Inventory[itemToBuy]++
                }
                console.log(data)
                await inventory.findOneAndUpdate(params, data)
            } else{
                new inventory({
                    Guild: message.guild.id,
                    User: message.author.id,
                    Inventory: {
                        [itemToBuy]: 1
                    }
                }).save();
            }
            message.reply(`You have bought ${itemToBuy}`) 
            client.rmv(message.author.id, itemPrice)
        })

    }
}