const Discord = require('discord.js')

module.exports = {
    name:'lamane',
    description:'info on lamane',

    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Here just all agree to this statement and we'll be on our way.
        Lamane is a nice person, he seems to have good intentions. However, sometimes, it's hard to memorize names-- Schmidt has just given up-- so it's frustrating how he can misidentify people I don't think he's being malicious; it would certainly be nice if he could be a bit more aware. Similarly, the mental health presentations were to spread awareness and reduce the stigma of these conditions, so asking if people have ADHD may have been a misstep; asking any medical condition is generally bad. But, he possibly didn't mean it as that way, but it may be nice to be more sensitive and avoid such direct confrontations in the future. - From: **Jerry**`)
        .setThumbnail('https://media.discordapp.net/attachments/850960769453785101/941180124173320262/unknown.png')

        message.reply({embeds: [embed]})
    }
}