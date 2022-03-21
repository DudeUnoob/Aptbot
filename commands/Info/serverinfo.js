// const Discord = require("discord.js");

// const dateformat = (...args) => import('dateformat').then(({default: dateformat}) => dateformat(...args));

// module.exports = {
// 	name: "serverinfo",
//     description:'serverinfo',
//     category:'Info',
	
//      run: async (client, message, args) => {
// 		let x = Date.now() - message.guild.createdAt;
// 		let h = Math.floor(x / 86400000) 
// 		let created = dateformat(message.guild.createdAt);
	
// 		let member = message.guild.members; 
// 		// let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
// 		// 	online = member.cache.filter(m => m.user.presence.status === "online").size,
// 		// 	idle = member.cache.filter(m => m.user.presence.status === "idle").size,
// 		// 	dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
// 		// 	robot = member.cache.filter(m => m.user.bot).size,
// 		// 	total = message.guild.memberCount;
	
// 		let channels = message.guild.channels;
// 		let text = channels.cache.filter(r => r.type === "text").size,
// 			vc = channels.cache.filter(r => r.type === "voice").size,
// 			category = channels.cache.filter(r => r.type === "category").size,
// 			totalchan = channels.cache.size;
// 		let messageArry = message.content.split(" ")
// 		let cmd = messageArry[0];   

// 			let serverinfoEmbed = new Discord.MessageEmbed()  
// 			  .setTitle("Server Info")
// 			  .addField(":id: Server ID", `**${message.guild.id}**`)
// 			  .addField(":id: Server Name", `**${message.guild.name}**`)
// 			  .addField(":crown: Server Owner", `${message.guild.owner}`)
// 			  .addField(":earth_africa: Server Region", `**${message.guild.region}**`)
// 			  .addField(":lock: Verification Level", `**${message.guild.verificationLevel}**`)
// 			  .addField(":calendar: Date Created", `**${created}** \n**since** **${h}** **days**`)
// 			  .addField(":calendar: Date You Joined", `**${message.member.joinedAt}**`)
// 			  .addField(`:speech_balloon: Channels [${totalchan}]`, `**Text:** **${text}** \n**Voice:** **${vc}** \n**Category:** **${category}**`)
// 			  //.addField(`:busts_in_silhouette: Members [${total}]`, `**Online:** **${online}** \n**Idle:** **${idle}** \n**DND:** **${dnd}** \n**Offline:** **${offline}** \n**Bots:** **${robot}**`)
// 			  .setColor('RANDOM')
// 			  .setThumbnail(message.guild.iconURL({ format: "png", dynamic: true, size: 1024}))
// 			  .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
// 			  .addField(':performing_arts: Roles', `${message.guild.roles.cache.map(role => role.toString()).join(' ')}`);
// 			message.channel.send({embeds: [serverinfoEmbed]})
// 	}
// }

// const { Client, Message, MessageEmbed } = require("discord.js");
// const moment = require('moment')

// module.exports = {
//   name: 'serverinfo',
//   /**
//    * @param {Client} client
//    * @param {Message} message
//    * @param {String[]} args
//    */
//   run: async (client, message, args) => {
//     const guild = message.guild;
//     const embed = new MessageEmbed()
//         .setTitle(message.guild.name)
//         .setThumbnail(message.guild.iconURL({ dynamic: true }))
//         .setColor('RANDOM')
//         .addField('General Information', [
//             `ID: ${guild.id}`
//             `Name: ${message.guild.name}`
//             `Owner: ${guild.owner}`
//         ])
//         .addField('Counts', 
//             `Roles: ${guild.roles.cache.size} roles`
//             `Channels: ${
//                 guild.channels.cache.size
//             }total Text: ${guild.channels.cache.filter(
//                 (ch) => ch.type === 'text'
//                 ).size} Voice: ${guild.channels.cache.filter(
//                     (ch) => ch.type === 'voice'
//                     ).size})`
//                     `Emojis: ${guild.emojis.cache.size} (Regular: ${guild.emojis.cache.filter((e) => !e.animated).size
//                     } Animated: ${
//                         guild.emojis.cache.filter((e) => e.animated).size
//                     })`, true
//                 )
//                 .addField("Additional Information", 
//                     `Created At: ${moment(guild.createdTimestamp).format(
//                         'LT'
//                         )} ${moment(guild.createdTimestamp).format('LL')} ${moment(
//                             guild.createdTimestamp)
//                             .fromNow()}`
//                             `Region: ${guild.region}`
//                             `Boost Level: ${guild.premiumTier ? `Level ${guild.premiumTier}` : 'None'
//                         }`
//                         `Boost Count: ${message.guild.premiumSubscriptionCount || "0"}`, true
//                 )
//                 message.channel.send({embeds: [embed]})

//   },
// };

// const filterLevels = {
// 	DISABLED: 'Off',
// 	MEMBERS_WITHOUT_ROLES: 'No Role',
// 	ALL_MEMBERS: 'Everyone'
// };

// const { GuildMember, Guild, GuildMemberManager, GuildManager }= require('discord.js')

// const Discord = require('discord.js')

// const verificationLevels = {
// 	NONE: 'None',
// 	LOW: 'Low',
// 	MEDIUM: 'Medium',
// 	HIGH: 'High',
// 	VERY_HIGH: 'Highest'
// };
// function checkDays(date) {
//       let now = new Date();
//       let diff = now.getTime() - date.getTime();
//       let days = Math.floor(diff / 86400000);
//       return days + (days == 1 ? " day" : " days") + " ago";
//   };
//   let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];

//   let region = {
//     "eu-central": ":flag_eu: Central Europe",
//     "singapore": ":flag_sg: Singapore",
//     "us-central": ":flag_us: U.S. Central",
//     "sydney": ":flag_au: Sydney",
//     "us-east": ":flag_us: U.S. East",
//     "us-south": ":flag_us: U.S. South",
//     "us-west": ":flag_us: U.S. West",
//     "eu-west": ":flag_eu: Western Europe",
//     "vip-us-east": ":flag_us: VIP U.S. East",
//     "london": ":flag_gb: London",
//     "amsterdam": ":flag_nl: Amsterdam",
//     "hongkong": ":flag_hk: Hong Kong",
//     "russia": ":flag_ru: Russia",
//     "southafrica": ":flag_za:  South Africa",
//     "brazil": ":flag_br: Brazil"
// };

// module.exports = {
    
//         name: 'serverinfo',
//         aliases: [ 'server', 'si', 'guildinfo', 'info' ],
//         description: 'Displays information about the current server.',
//         category: 'Info',
        
      

//     run: async (client, message, args) => {

//         const embed = new Discord.MessageEmbed() 
//         .setFooter({ text: `Shard #${message.guild.shardID}`})
//    .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL})
//    //.addField({ name:`Server name`, value: message.guild.name, inline: true})
//    .addField("ID", `${message.guild.id}`, true)
//    .addField(`Owner`, `${await message.guild.fetchOwner()}`, true)
//    .addField(  `Region`, `${message.guild.region}`, true)
//    .addField( `Serverinfo`,  `${message.guild.members.cache.size} members | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size} bots`, true)
//    .addField( `Server verification level`,   `${message.guild.verificationLevel}`, true)
//    .addField( `Channels`,  `${message.guild.channels.cache.size}`,   true)
//    .addField( `Roles`,  `${message.guild.roles.cache.size}`, true)   
//    .addField( `Created at`,  `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} **(${checkDays(message.channel.guild.createdAt)})**`,  true)
//    .setThumbnail(message.guild.iconURL())
//    .setColor("RANDOM");
//        message.channel.send({ embeds: [embed]});
    
      

     
//     }
// }
// const { MessageEmbed } = require("discord.js");
// const moment = require("moment");
// module.exports = {
//     name: "server",
//     aliases: ["server-info", "serverinfo"],
//     category: "info",
//     description: "Return server infos.",
//     run: async (client, message, args) => {
//         const guildOwner = client.users.cache.get(message.guild.ownerId);
//         const serverembed = new MessageEmbed()
//             .setDescription("Server Information")
//             .setColor("#800080")
//             .setThumbnail(message.guild.iconURL())
//             .addField("Server name", `${message.guild.name}`)
//             .addField("Created at", `${moment(message.guild.createdAt).format("MMMM Do YYYY, h:mm:ss a")} (${moment(message.guild.createdAt).fromNow()})`)
//             .addField("Joined at: ", `${moment(message.member.joinedAt).format("MMMM Do YYYY, h:mm:ss a")} (${moment(message.member.joinedAt).fromNow()})`)
//             .addField("Owner: ", `${guildOwner}`)
//             .addField("Total members: ", `${message.guild.memberCount}`)
//             .setFooter({text: client.user.username, icon_URL: client.user.displayAvatarURL()})
//             .setTimestamp();
//         message.channel.send({ embeds: [serverembed] });
//     },
// };

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const { GuildMember, Guild, GuildMemberManager, GuildManager }= require('discord.js')

const Discord = require('discord.js')

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: 'High',
	VERY_HIGH: 'Highest'
};
function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
  };
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];

  let region = {
    "eu-central": ":flag_eu: Central Europe",
    "singapore": ":flag_sg: Singapore",
    "us-central": ":flag_us: U.S. Central",
    "sydney": ":flag_au: Sydney",
    "us-east": ":flag_us: U.S. East",
    "us-south": ":flag_us: U.S. South",
    "us-west": ":flag_us: U.S. West",
    "eu-west": ":flag_eu: Western Europe",
    "vip-us-east": ":flag_us: VIP U.S. East",
    "london": ":flag_gb: London",
    "amsterdam": ":flag_nl: Amsterdam",
    "hongkong": ":flag_hk: Hong Kong",
    "russia": ":flag_ru: Russia",
    "southafrica": ":flag_za:  South Africa",
    "brazil": ":flag_br: Brazil"
};

module.exports = {
    
        name: 'serverinfo',
        aliases: [ 'server', 'si', 'guildinfo', 'info' ],
        description: 'Displays information about the current server.',
        category: 'Info',
        
      

    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed() 
        .setFooter({ text: `Shard #${message.guild.shardID}`})
   .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL})
   //.addField({ name:`Server name`, value: message.guild.name, inline: true})
   .addField("ID", `${message.guild.id}`, true)
   .addField(`Owner`, `${await message.guild.fetchOwner()}`, true)
   .addField(  `Region`, `${message.guild.region}`, true)
   .addField( `Serverinfo`,  `${message.guild.members.cache.size} members | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size} bots`, true)
   .addField( `Server verification level`,   `${message.guild.verificationLevel}`, true)
   .addField( `Channels`,  `${message.guild.channels.cache.size}`,   true)
   .addField( `Roles`,  `${message.guild.roles.cache.size}`, true)   
   .addField( `Created at`,  `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} **(${checkDays(message.channel.guild.createdAt)})**`,  true)
   .setThumbnail(message.guild.iconURL())
   .setColor("RANDOM");
       message.channel.send({ embeds: [embed]});
    
      

     
    }
}