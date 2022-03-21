const Levels = require('discord-xp');
const Discord = require('discord.js');
Levels.setURL("mongodb+srv://DudeUnoob:Balaram26@cluster0.wvo6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

module.exports = {
    name:'xp',
    description:'Add xp to a user!',
    category:'Info',
    memberpermissions:['ADMINISTRATOR'],
    usage:'<prefix>xp @user xp amount',

    run: async(client, message, args) => {
        
        const user = message.mentions.members.first()
        const xpAmount = parseInt(args[1])
        Levels.appendXp(user.id, message.guild.id, xpAmount )
        message.channel.send(`Added ${args[1]} to ${user}`)

        
    }
}