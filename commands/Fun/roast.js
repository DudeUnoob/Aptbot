const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const Discord = require('discord.js')

module.exports = {
    name:'roast',
    description:'Sends a funny roast!',
    category:'Fun',
    usage:'<prefix>roast @person(optional)',

    run: async(client, message, args) => {
    let person = message.mentions.members.first() 

    let author = message.author;

    

   if(message.mentions.members.first()){

        let data = await fetch(`https://api-roast.herokuapp.com/api?apiKey=1eebfb9f7b4c77f9f232ccc95714361a`).then(res => res.json())
    let embed = new Discord.MessageEmbed()
        embed.setTitle(`${message.mentions.users.first().username} got roasted 🔥🔥🔥`)
        embed.setDescription(data.message)
        embed.setColor('RANDOM')

    message.channel.send({embeds:[embed]})
   }
   else if(message.author){
    let data = await fetch(`https://api-roast.herokuapp.com/api?apiKey=1eebfb9f7b4c77f9f232ccc95714361a`).then(res => res.json())
    let embed = new Discord.MessageEmbed()
        embed.setTitle(`${message.author.username} - Roasted 🔥🔥🔥`)
        embed.setDescription(data.message)
        embed.setColor('RANDOM')

    message.channel.send({embeds:[embed]})
}

    }
}