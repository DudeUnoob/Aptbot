const { Client, Message, MessageAttachment } = require("discord.js");
const { Canvas } = require('canvacord')

module.exports = {
  name: 'wanted',
  usage: "wanted <user>",
  description:'Sends a wanted image of a user',
  category:'Fun',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" })

    const image = await Canvas.wanted(avatar);

    const attachment = new MessageAttachment(image, 'wanted.png')

    message.channel.send(
      {files: [attachment]}
    )
  }
}