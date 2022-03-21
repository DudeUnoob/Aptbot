const Discord = require("discord.js");
const config = require(`./botconfig/config.json`);
const economy = require('discord-bot-eco')
const { GiveawaysManager } = require('discord-giveaways')
const settings = require(`./botconfig/settings.json`);
const filters = require(`./botconfig/filters.json`);


const colors = require("colors"); 
const moment = require('moment')
const rankWordsSchema = require('./handlers/rankWords')
const Enmap = require("enmap");
const autoroleSchema = require('./handlers/autorole')
const { Intents } = require('discord.js')
const canvacord = require("canvacord");
const mongoose = require('mongoose')
const prefix = config.prefix;
const db = require("quick.db");
const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://DudeUnoob:Balaram26@cluster0.wvo6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const libsodium = require("libsodium-wrappers");
const ffmpeg = require("ffmpeg-static");
const voice = require("@discordjs/voice");
const DisTube = require("distube").default;
const https = require('https-proxy-agent');
const modlogsSchema = require('./handlers/modlogs')
const premiumSchema = require('./handlers/premium')
const moneySchema = require('./handlers/money')
const welcomeImgSchema = require('./handlers/welcomeImage')
const rankSchema = require('./handlers/rankChannel')
const { mongooseConnectionString } = require(`./botconfig/config.json`);
var jimp = require('jimp')
const client = new Discord.Client({
    shards: "auto",
   
    allowedMentions: {
      parse: [],
      repliedUser: false,
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER'],
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
    ],
    presence: {
      activity: {
        name: `+help | musicium.eu`, 
        type: "PLAYING", 
      },
      status: "online"
    }
});


        //load the Discord.js Library          //make a new Client
      //load the config.json file              //load the enmap library
        //load the canvacord library
// client.points = new Enmap({ name: "points" }); //For ranking system
// client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
// const ranking = require("./ranking");         //load the ranking file
// ranking(client); 
//BOT CODED BY: Tomato#6966
//DO NOT SHARE WITHOUT CREDITS!
//const proxy = 'http://123.123.123.123:8080';
//const agent = https(proxy);
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
let spotifyoptions = {
  parallel: true,
  emitEventsAfterFetching: true,
}
if(config.spotify_api.enabled){
  spotifyoptions.api = {
    clientId: config.spotify_api.clientId,
    clientSecret: config.spotify_api.clientSecret,
  }
}
client.distube = new DisTube(client, {
  emitNewSongOnly: false,
  leaveOnEmpty: true,
  leaveOnFinish: true,
  leaveOnStop: true,
  savePreviousSongs: true,
  emitAddSongWhenCreatingQueue: false,
  //emitAddListWhenCreatingQueue: false,
  searchSongs: 0,
  youtubeCookie: config.youtubeCookie,     //Comment this line if you dont want to use a youtube Cookie 
  nsfw: true, //Set it to false if u want to disable nsfw songs
  emptyCooldown: 25,
  ytdlOptions: {
    //requestOptions: {
    //  agent //ONLY USE ONE IF YOU KNOW WHAT YOU DO!
    //},
    highWaterMark: 1024 * 1024 * 64,
    quality: "highestaudio",
    format: "audioonly",
    liveBuffer: 60000,
    dlChunkSize: 1024 * 1024 * 64,
  },
  youtubeDL: true,
  updateYouTubeDL: true,
  customFilters: filters,
  plugins: [
    new SpotifyPlugin(spotifyoptions),
    new SoundCloudPlugin()
  ]
})
//Define some Global Collections
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = require("fs").readdirSync(`./commands`);
client.allEmojis = require("./botconfig/emojis.json");
client.snipes = new Discord.Collection();




client.modlogs = async function({ Member, Action, Color, Reason, Author}, message) {
    const data = await modlogsSchema.findOne({ Guild: message.guild.id });
    if(!data) return;

    const channel = message.guild.channels.cache.get(data.Channel);
    const logsEmbed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`Reason: ${Reason || 'No Reason!'}`)
        .addField('Member', `${Member.user.tag} (${Member.id || '.'})`)
        .setTitle(`Action took: ${Action}`)
        .setFooter({text:`By: ${Author || 'none'}`})

    channel.send({embeds: [logsEmbed]})
}

client.modlogs2 = async function({ Member, Action, Color, Reason, Author}, message) {
  const data = await modlogsSchema.findOne({ Guild: message.guild.id });
  if(!data) return;

  const channel = message.guild.channels.cache.get(data.Channel);
  const logsEmbed = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`Reason: ${Reason || 'No Reason!'}`)
      .addField('Member', `${Member.tag} (${Member.id || '.'})`)
      .setTitle(`Action took: ${Action}`)
      .setFooter({text:`By: ${Author || 'none'}`})

  channel.send({embeds: [logsEmbed]})
}


client.rank = async function({ Rank, Level }, message){
  const data = await rankSchema.findOne({ Guild: message.guild.id });
  if(!data) return;

  const channel = message.guild.channels.cache.get(data.Channel);
  if(!channel) {
    return
  }
  const rankEmbed = new Discord.MessageEmbed()
  .setDescription(`${Rank}, congratulations! You have leveled up to **${Level}!**`)
  .setColor('RANDOM')
  channel.send({embeds: [rankEmbed]})
}
client.bal = (id) => new Promise(async ful => {
  const data = await moneySchema.findOne({ id });
  if(!data) return ful(0);
  ful(data.coins);
})
client.add = (id, coins) => {
   moneySchema.findOne({ id }, async(err, data) => {
     if(err) throw err;
     if(data) {
       data.coins += coins;
     } else{
       data = new moneySchema({ id, coins })
     }
     data.save();
   })
}
client.rmv = (id, coins) => {
  moneySchema.findOne({ id }, async(err, data) => {
    if(err) throw err;
    if(data) {
      data.coins -= coins;
    } else{
      data = new moneySchema({ id, coins: -coins })
    }
    data.save();
  })
}

client.setMaxListeners(100); require('events').defaultMaxListeners = 100;

client.settings = new Enmap({ name: "settings",dataDir: "./databases/settings"});
client.infos = new Enmap({ name: "infos", dataDir: "./databases/infos"});
const manager = new GiveawaysManager(client, {
  default: {
    botsCanWin: false,
    embedColor: 'RANDOM',
    embedColorEnd: 'RED',
    reaction:'🎉'
  }
})

client.giveawaysManager = manager;


//Require the Handlers                  Add the antiCrash file too, if its enabled
["events", "commands","welcomeImage","rankWords", "slashCommands", "rankimage", "prefix","birthday", "leaveChannel","autorole","premium", "rankChannel", "inventory", "money", "welcomeChannel","modlogs",  settings.antiCrash ? "antiCrash" : null, "distubeEvent"]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    })|| config.token
//Start the Bot
client.login(process.env.token || config.token)




/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */








/**
 * @LOAD_THE_DASHBOARD - Loading the Dashbaord Module with the BotClient into it!
 */
client.on("ready", () => {
  require("./dashboard/index.js")(client);

  
})


const Schema = require('./handlers/welcomeChannel');
const canvas = require('discord-canvas');
const { MessageAttachment } = require('discord.js')
// const client = require('../../index')




client.on('guildMemberAdd', async(member) => {
  let welImg = welcomeImgSchema.findOne({ Guild: member.guild.id })

  let cus = welImg.ImageURL;

  if(!cus){
  cus = "https://i.imgur.com/v2IciGe.png"
  }
  Schema.findOne({ Guild: member.guild.id }, async(e,data ) => {
 if(!data) return;
  const user = member.user;
  const image =  new canvas.Welcome()
  .setUsername(user.username)
  .setDiscriminator(user.discriminator)
  .setMemberCount(member.guild.memberCount)
  .setGuildName(member.guild.name)
  .setAvatar(user.displayAvatarURL({ format: 'png' }))
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground(cus)
  .toAttachment();
    
      const attachment = new MessageAttachment((await image).toBuffer(), "goodbye-image.png");

      const channel = member.guild.channels.cache.get(data.Channel);
      channel.send({files: [attachment]})
  })

    const g = client.guilds.cache.get("893850212127342613");


  g.members.cache.forEach(member => {
    if (member.roles.cache.some(role => role.id === "917424752946188308")){
      premiumSchema.findOne({
      User: member.id
    },async(err, data) => {
      if(data) return console.log("Member already has the premium role")

      new premiumSchema({
        User: member.id
      }).save();
          return console.log('Add the new member to the database')
    })
    }
  })

  autoroleSchema.findOne({
    guild: member.guild.id
}, async (err, data) => {
    if (!data) return;
    if (data) {
        const joinrole = member.guild.roles.cache.find(role => role.id == data.role);
        if (!joinrole) {
            message.reply('cant find role')
            return data.delete();
        }
        member.roles.add(joinrole.id)

    }
})


})
const leaveSchema = require('./handlers/leaveChannel');
const { join } = require("path/posix");

client.on('guildMemberRemove', async(member) => {
  leaveSchema.findOne({ Guild: member.guild.id }, async(e,data ) => {
    if(!data) return;
     const user = member.user;
     const image =  new canvas.Goodbye()
     .setUsername(user.username)
     .setDiscriminator(user.discriminator)
     .setMemberCount(member.guild.memberCount)
     .setGuildName(member.guild.name)
     .setAvatar(user.displayAvatarURL({ format: 'jpg' }))
     .setColor("border", "#8015EA")
     .setColor("username-box", "#8015EA")
     .setColor("discriminator-box", "#8015EA")
     .setColor("message-box", "#8015EA")
     .setColor("title", "#8015EA")
     .setColor("avatar", "#8015EA")
     .setBackground("https://i.imgur.com/dKcRBCg.png")
     .toAttachment();
       
         const attachment = new MessageAttachment((await image).toBuffer(), "goodbye-image.jpg");
   
         const channel = member.guild.channels.cache.get(data.Channel);
         channel.send({files: [attachment]})
})
})


client.on('messageDelete', (message) => {
  let snipes = client.snipes.get(message.channel.id) || [];
  if (snipes.length > 5) snipes = snipes.slice(0, 4);

  snipes.unshift({
    msg: message,
    image: message.attachments.first()?.proxyURL || null,
    time: Date.now(),
  })

  const snipe = 0;
  const target = snipes[snipe];
  const {msg, time, image} = target;

    client.modlogs({
    Action: `Message Deleted`,
    Author: client.user.tag,
    Reason: `**${msg.content || image}** <#${msg.channel.id}> (${msg.channel.id}) at ${moment(time)}`,
    Color: 'RED',
    Member: msg.member ,
  }, message)

  client.snipes.set(message.channel.id, snipes);

  // client.modlogs({
  //   Action:'Message Deleted',
  //   Author:message.author.username,
  //   Reason: message,
  //   Color: 'RANDOM',
  //   Member: message.author.username,

  // }, message)
 
})

client.on('channelCreate', async(channel) => {

  const fetchedLogs = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_CREATE"});
  const Entry = fetchedLogs.entries.first()

  const { executor, target } = Entry;

  client.modlogs2({
    Action:'Channel Created',
    Author: client.user.tag,
    Reason:`**Channel Created** <#${channel.id}> (${channel.id})`,
    Color:'YELLOW',
    Member: executor,
  }, channel)
})

client.on('channelDelete', async(channel) => {
  
  const fetchedLogs = await channel.guild.fetchAuditLogs({ limit: 1, type: "CHANNEL_DELETE "});
  const Entry = fetchedLogs.entries.first()

  const { executor, target } = Entry;

  client.modlogs2({
    Action: 'Channel Delete',
    Author: client.user.tag,
    Reason: `**Channel Deleted** <#${channel.id}> (${channel.id})`,
    Color: 'RED',
    Member: executor,
  }, channel)
})

client.on('guildMemberUpdate', async(oldMember, newMember) => {
  
  if(oldMember.nickname != newMember.nickname){
    const fetchedLogs = await newMember.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_UPDATE"});
    const Entry = fetchedLogs.entries.first()

    const { executor, target } = Entry;
     client.modlogs2({
      Action: 'Nickname Change',
      Author: client.user.tag,
      Reason: `**Nickname changed** **${oldMember.nickname}** to **(${newMember.nickname})** by **${executor.tag}**`,
      Color: 'GREEN',
      Member: newMember.user,
    }, oldMember, newMember)
  }

  if(oldMember.roles != newMember.roles){
    const memberRoles = oldMember.roles.cache
    .filter((roles) => roles.id !== oldMember.guild.id)
    .map((role) => role.toString())

    const newMemberRoles = newMember.roles.cache
    .filter((roles) => roles.id !== newMember.guild.id)
    .map((role) => role.toString())

    const fetchedLogs = await newMember.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE"});
    const Entry = fetchedLogs.entries.first()

     const { executor, target } = Entry;
    client.modlogs2({
      Action:'Roles Updated',
      Author: client.user.tag,
      Reason: `**Roles changed** (${memberRoles} **to** ${newMemberRoles} by **${executor.tag})**`,
      Color: 'GREEN',
      Member: newMember.user,
    }, newMember)
  }
})

client.on('messageUpdate', async(oldMessage, newMessage) => {

  client.modlogs2({
    Action:'Message Edited/Updated',
    Author: client.user.tag,
    Reason:`Message edited from **${oldMessage.content}** to **${newMessage.content}** in <#${newMessage.channel.id}>`,
    Color:'YELLOW',
    Member: newMessage.author,
  }, newMessage)
})

client.on('roleCreate', async(role) => {
  const fetchedLogs = await role.guild.fetchAuditLogs({ limit: 1, type: "ROLE_CREATE"});
  const Entry = fetchedLogs.entries.first()

  const { executor, target } = Entry;

  client.modlogs2({
    Action:'Role Created',
    Author: client.user.tag,
    Reason: `New Role created - **${role.name}**`,
    Member: executor,
    Color: 'GREEN',
  }, role)
})
  












