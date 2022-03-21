const Discord = require('discord.js');

const canvacord = require('canvacord');

module.exports = {
    
        name: 'comment',
        description: 'Shows your text as a Youtube Comment',
        aliases: ["comment"],
        usage: '<text>',
        category: 'Fun',
    
    run: async (client, message, args) => {
        const comment = args.join('');
        if(!comment) return message.channel.send(`${bot.emotes.error} Provide something to Comment!`)
        try {    
        let yt = await canvacord.Canvas.youtube({"avatar":message.author.displayAvatarURL({format: "png"}),"username":message.author.username, "content":args.join(" ")})
        let attachment = new Discord.MessageAttachment(yt, 'comment.png')
        message.channel.send({files: [attachment]});
    }catch(err) {
        const embed2 = new Discord.MessageEmbed()
    .setTitle(`${bot.emotes.error} Something went wrong.\n${bot.emotes.error}Note : It won't work if the User contains Unwanted characters in his Username.`)
    .setColor('RANDOM');
    message.channel.send({embeds: [embed2]});
    }

    }
};