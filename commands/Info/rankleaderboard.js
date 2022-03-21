const Levels = require('discord-xp')
const Discord = require('discord.js')
module.exports = {
    name:'leaderboard',
    aliases:['lb'],
    category:'Info',
    description:'Shows the rank leaderboard for the top 10 ppl!',

    run: async(client,message,args) => {

        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10)

        if (rawLeaderboard.length < 1) return message.reply("Nobody's on the leaderboard yet!")

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true)

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`)

        // message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`)

        const embed = new Discord.MessageEmbed()
        .setColor("WHITE")
        .setTitle("Rank Leaderboard")
        .setDescription(lb.join("\n\n"))
        
        message.channel.send({embeds: [embed]})
    
    }
}