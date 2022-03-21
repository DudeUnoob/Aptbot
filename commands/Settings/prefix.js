const prefixSchema = require('../../handlers/prefix')
const { Message } = require('discord.js')
module.exports = {
    name : 'prefix',
    description:'Changes the prefix in the server',
    memberpermissions:['MANAGE_GUILD'], 
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const res = await args.join(" ")
        if(!res) return message.channel.send('Please specify a prefix to change to.')
        prefixSchema.findOne({ Guild : message.guild.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
                data = new prefixSchema({
                    Guild : message.guild.id,
                    Prefix : res
                })
                data.save()
                message.channel.send(`Your prefix has been updated to **${res}**`)
            } else {
                data = new prefixSchema({
                    Guild : message.guild.id,
                    Prefix : res
                })
                data.save()
                message.channel.send(`Custom prefix in this server is now set to **${res}**`)
            }
        })
    }
}
// const {
//   MessageEmbed
// } = require("discord.js");
// const config = require("../../botconfig/config.json");
// const ee = require("../../botconfig/embed.json");
// const settings = require("../../botconfig/settings.json");
// module.exports = {
//   name: "prefix", //the command name for execution & for helpcmd [OPTIONAL]
//   category: "Settings",
//   aliases: ["setprefix"],
//   usage: "prefix <newPrefix>",
//   cooldown: 1, //the command cooldown for execution & for helpcmd [OPTIONAL]
//   description: "Changes the Prefix of the Bot!", //the command description for helpcmd [OPTIONAL]
//   memberpermissions: ["MANAGE_GUILD "], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
//   requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
//   alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]

//   run: async (client, message, args) => {
//     try {
//       //things u can directly access in an interaction!
//       const {
//         member,
//         channelId,
//         guildId,
//         applicationId,
//         commandName,
//         deferred,
//         replied,
//         ephemeral,
//         options,
//         id,
//         createdTimestamp
//       } = message;
//       const {
//         guild
//       } = member;
//       if (!args[0]) {
//         return message.reply({
//           embeds: [
//             new MessageEmbed()
//             .setColor(ee.wrongcolor)
//             .setFooter(ee.footertext, ee.footericon)
//             .setTitle(`${client.allEmojis.x} **Please add a Prefix!**`)
//             .setDescription(`**Usage:**\n> \`${client.settings.get(guild.id, "prefix")}prefix <newPrefix>\``)
//           ],
//         })
//       }
//       let newPrefix = args[0];
//       client.settings.ensure(guild.id, {
//         prefix: config.prefix
//       });

//       client.settings.set(guild.id, newPrefix, "prefix");
//       return message.reply({
//         embeds: [
//           new MessageEmbed()
//           .setColor(ee.color)
//           .setFooter(ee.footertext, ee.footericon)
//           .setTitle(`${client.allEmojis.check_mark} **The new Prefix is now: \`${newPrefix}\`**`)
//         ],
//       })
//     } catch (e) {
//       console.log(String(e.stack).bgRed)
//     }
//   }
// }
// /**
//  * @INFO
//  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
//  * @INFO
//  * Work for Milrato Development | https://milrato.eu
//  * @INFO
//  * Please mention Him / Milrato Development, when using this Code!
//  * @INFO
//  */
