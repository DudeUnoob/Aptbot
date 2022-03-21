const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const Discord = require('discord.js')

module.exports = {
    name:'pokemon',
    description:'search for information on a pokemon!',
    category:'Premium',
    premium: true,

    run: async(client, message, args) => {
        
        const pokemon = args[0]

        if(!pokemon){
            return message.reply('Please specify a pokemon you want to get info on!')
        }

        const res = await fetch(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${pokemon}`).then(info => info.json());
        const embed = new Discord.MessageEmbed()
				.setAuthor({ name: res.name, iconURL: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${res.images.typeIcon}`})
				.setDescription(`Type of this pokemon is **${res.info.type}**. ${res.info.description}`)
				.setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${res.images.photo}`)
				.setFooter({ text: `Weakness of pokemon - ${res.info.weakness}`, iconURL: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${res.images.weaknessIcon}`});

         message.channel.send({embeds: [embed]})
    }
}