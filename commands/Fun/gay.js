const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
    name: 'gay',
    description: "Your avatar but in gay",
    category:'Fun',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const avata = user.displayAvatarURL({ format: "png" })

        const rainbow = await Canvas.rainbow(avata)

        const attachment = new MessageAttachment(rainbow, `gay.png`)

        message.channel.send(
            {files: [attachment]}
        )
    }
}