const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

const canvacord = require("canvacord");

module.exports = {
    name : 'slap',
    description : 'Slap who you want.',
    category:'Fun',

    
    run : async(client, message, args) => {
        
          
  const user = message.mentions.users.first ()

    if (!user) {
      const image1 = client.user.displayAvatarURL({ format: "png" });
      const image2 = message.author.displayAvatarURL({ format: "png" });
      const slap = await canvacord.Canvas.slap(image1, image2);
      let attachment = new Discord.MessageAttachment(slap, "slap.png");
       message.channel.send({files: [attachment]});
    }
    if (user) {
      const image1 = message.author.displayAvatarURL({ format: "png" });
      const image2 = user.displayAvatarURL({ format: "png" });
      const slap = await canvacord.Canvas.slap(image1, image2);
      let attachment = new Discord.MessageAttachment(slap, "slap.png");
       message.channel.send({files: [attachment]});

    }
}
  
}