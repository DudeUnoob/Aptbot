const Levels = require('discord-xp')
const Discord = require('discord.js')
const canvacord = require('canvacord')
const rankImg = require('../../handlers/rankimage')
module.exports = {
    name:'rank',
    category:'Info',
    description:"Check out your rank or someone else's!",

    run: async(client,message,args) => {

        
        
        Levels.setURL("mongodb+srv://DudeUnoob:Balaram26@cluster0.wvo6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        const username = message.mentions.users.first() || message.author
        const target = message.mentions.members.first() || message.author

        let custom;
        let rankImage = await rankImg.findOne({ User: username.id })
        .catch(err => console.log(err))

        if(rankImage) {
            custom = rankImage.ImageURL;
        } else {
            custom = 'https://i.imgur.com/r7mACTb.png';
        }

        const user = await Levels.fetch(target.id, message.guild.id);

        if(!user) return message.channel.send("Seems like this user hasn't gained any xp so far")
        
        // message.channel.send(`> **${target.tag}** is currently level ${user.level}`)
        const neededXp = Levels.xpFor(parseInt(user.level) + 1)

        //const img = "https://i.imgur.com/8oAzl0j.png"; //700px x 250px

        const rank = new canvacord.Rank()
            .setAvatar(target.displayAvatarURL({ dynamic: false, format: 'png' }))
            .setBackground("IMAGE", custom)
            .setRank(1, 'RANK', false)
            .setLevel(user.level)
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setStatus('online')
            .setProgressBar("#FFFFFF", "COLOR")
            .setUsername(username.username)
            .setDiscriminator(username.discriminator);

        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                message.channel.send({files: [attachment]});
            });
    }
}