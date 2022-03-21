//Import Modules
const config = require(`../../botconfig/config.json`);
const AntiLinkClient = require('anti-link-for-discord');
const ee = require(`../../botconfig/embed.json`);
const settings = require(`../../botconfig/settings.json`);
const prefixSchema = require('../../handlers/prefix')
const mongoose = require('mongoose')
const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://DudeUnoob:Balaram26@cluster0.wvo6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const premiumSchema = require('../../handlers/premium');
const rankSchema = require('../../handlers/rankChannel')
const { onCoolDown, replacemsg } = require(`../../handlers/functions`);
const db = require('quick.db')

const Discord = require(`discord.js`);

module.exports = async (client, message) => {



  if(db.has(`afk-${message.author.id}`)) {
    const info = db.get(`afk-${message.author.id}`)
     await db.delete(`afk-${message.author.id}`)
    message.reply(`Your afk status have been removed (**${info}**)`)
  }
 

  const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
  let users = message.author
  let pogBot = client.user.id;



  
  const botLevel = await Levels.deleteUser(pogBot, message.guild.id);
  const hasLeveledUp = await Levels.appendXp(users.id , message.guild.id, randomAmountOfXp);

  
  // if(users === "893588984826044446") return
  if (hasLeveledUp) {
  if(message.author.bot) return;
  const user = await Levels.fetch(users.id, message.guild.id);
  
  // if(users === "893588984826044446") return
if(user.level == 1){
  let role1 = message.guild.roles.cache.find(role => role.name === "Level 1")
  if(!role1) await message.guild.roles.create({
    name: 'Level 1',
    color: 'GREY',
  }).catch(err => console.log(err))
  role1 = message.guild.roles.cache.find(role => role.name === 'Level 1')
  if(message.member.roles.cache.has(role1.id)) return;
  else await message.member.roles.add(role1.id)
}
if(user.level == 5){
  let role1 = message.guild.roles.cache.find(role => role.name === "Level 5")
  if(!role1) await message.guild.roles.create({
    name: 'Level 5',
    color: 'GREEN',
  }).catch(err => console.log(err))
  role1 = message.guild.roles.cache.find(role => role.name === 'Level 5')
  if(message.member.roles.cache.has(role1.id)) return;
  else await message.member.roles.add(role1.id)
}
if(user.level == 10){
  let role1 = message.guild.roles.cache.find(role => role.name === "Level 10")
  if(!role1) await message.guild.roles.create({
    name: 'Level 10',
    color: 'ORANGE',
  }).catch(err => console.log(err))
  role1 = message.guild.roles.cache.find(role => role.name === 'Level 10')
  if(message.member.roles.cache.has(role1.id)) return;
  else await message.member.roles.add(role1.id)
}
if(user.level == 15){
  let role1 = message.guild.roles.cache.find(role => role.name === "Level 15")
  if(!role1) await message.guild.roles.create({
    name: 'Level 15',
    color: 'BLUE',
  }).catch(err => console.log(err))
  role1 = message.guild.roles.cache.find(role => role.name === 'Level 15')
  if(message.member.roles.cache.has(role1.id)) return;
  else await message.member.roles.add(role1.id)
}
if(user.level == 20){
  let role1 = message.guild.roles.cache.find(role => role.name === "Level 20")
  if(!role1) await message.guild.roles.create({
    name: 'Level 20',
    color: 'RED',
  }).catch(err => console.log(err))
  role1 = message.guild.roles.cache.find(role => role.name === 'Level 20')
  if(message.member.roles.cache.has(role1.id)) return;
  else await message.member.roles.add(role1.id)
}
  //message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**!`);
  client.rank({
    Rank: message.author,
    Level: user.level
  }, message)
}


  // if(!message.guild || message.author.id === client.user.id) return;

  // const splittedMsgs = message.content.split(' ');

  // let deleting = false;

  // await Promise.all(
  //   splittedMsgs.map((content) => {
  //     if(blacklistedWords.get(message.guild.id)?.includes(content.toLowerCase())) deleting = true;
  //   })
  // )
  // if(deleting) return message.delete()
  let bl = [  "/diis",
  "//disdor",
  "rd-plus.c",
  "s-nitro.x",
  "nittro.",
  "tro.ru",
  "//dissord.",
  "//discorde",
  "//discoord",
  "//discopd",
  "//discoqd",
  "//disccr",
  "//drd.gi",
  "/discorcl",
  "/disrcod",
  "/discrod",
  "/disrocd",
  "/discord-nitro",
  "nitros.com/",
  "/dilscord",
  "//dicso",
  "//disor",
  "//disca",
  "//discb",
  "//discc",
  "//discd",
  "//dliscorde",
  "//discord.glft.space",
  "//dlicords",
  "//disce",
  "//discf",
  "//discg",
  "//disch",
  "//disci",
  "//discj",
  "//disck",
  "//discl",
  "//discm",
  "//discn",
  "//discod",
  "//discp",
  "//discq",
  "//discr",
  "//discs",
  "//disct",
  "//discu",
  "//discv",
  "//discw",
  "//discx",
  "//discy",
  "//discz",
  "//disqd",
  "cora.gift",
  "corb.gift",
  "corc.gift",
  "core.gift",
  "corf.gift",
  "corg.gift",
  "corh.gift",
  "cori.gift",
  "corj.gift",
  "cork.gift",
  "corl.gift",
  "corm.gift",
  "corn.gift",
  "coro.gift",
  "corp.gift",
  "corq.gift",
  "cors.gift",
  "cort.gift",
  "coru.gift",
  "corv.gift",
  "corw.gift",
  "corx.gift",
  "cory.gift",
  "corz.gift",
  "corl.gift",
  "dnito.",
  "idiscord.com",
  "nitro-gg.",
  "nltro.c",
  "nltro.g",
  "nltro.r",
  "nltro.x",
  "nitre.c",
  "nitre.g",
  "nitre.r",
  "nitre.x",
  "nltro.c",
  "nltro.g",
  "nltro.r",
  "nltro.x",
  "nltros.c",
  "nltros.g",
  "nltros.r",
  "nltros.x",
  "nitres.c",
  "nitres.g",
  "nitres.r",
  "nitres.x",
  "nltros.c",
  "nltros.g",
  "nltros.r",
  "nltros.x",
  "rdnitro.xyz",
  "rdnitros.xyz",
  "nitrosgift",
  "nitrosg1ft",
  "nitrosglft",
  "n1trosgift",
  "n1trosg1ft",
  "n1trosglft",
  "nltrosgift",
  "nltrosg1ft",
  "nltrosglft",
  "glft.x",
  "corrl.com/",
  "rd-to.c",
  "rd-up.c",
  "unnitty.ru",
  "unity.ru",
  "unnity.ru",
  "unitty.ru",
  "drop.info",
  "t-discr",
  "t-diis",
  ".net/steam",
  "t/steam",
  ".click/di",
  ".click/ste",
  "/dlscord",
  "/dlscorld",
  "discord.voto",
  "/discord-gifts",
  "/ds-nit",
  "discorb-",
  "/discordgift-",
  "//dizc",
  "nitro/steam",
  "glft/steam",
  ".link/gift",
  ".link/glft",
  "nitro.link/",
  "/steam-discord",
  "/discord-steam",
  "/dlscordnltro",
  ".ru.com/gift",
  ".ru.com/glft",
  "drop.com/gift",
  "nitros.xyz/b",
  "discord.ru/",
  "steam.ru",
  "//gifs-",
  "gift.ru",
  "gifts.ru",
  "o-gift.x",
  "d-gift.x",
  "ft.com/bill",
  "ru/air",
  "ru/alr",
  "ru/a1r",
  "ru/drop",
  "ord.shop/",
  "rod.shop/",
  "cod.shop/",
  "d-app.me",
  ".me/nitro",
  ".me/free",
  "tro-free.",
  "tre-free.",
  "-cpp.com/",
  "ocrd.gift/",
  "dlscord.net",
  "rd.net/saf",
  "cord.org/",
  ".org.ru/",
  ".ru/gift",
  "/stearm",
  "/stearn",
  "/stean",
  "nitq.",
  "steammcomunity.",
  "/steamcommur",
  "/strean",
  "/steamcommunn",
  "/steem",
  "/steam-money",
  "comnitro.",
  "comminity.",
  "comminuty.",
  "/treadeoffre",
  "/treadoffer",
  "/tradeofer",
  "/tradedoffer",
  "/treadeoffer",
  "/tracleofter",
  "/tradeofter",
  "/tracleoffer",
  "/netflix_accbot",
  "discordsteaml.",
  "//stellss"];
    let foundInText = false;
    for (var i in bl) {
      if (message.content.toLowerCase().includes(bl[i].toLowerCase())) {
        foundInText = true;
        message.delete()
        let blEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('Please do not send nitro and scam links!!! :octagonal_sign:')
    message.channel.send({embeds: [blEmbed]})
      }
    }
  // if(foundInText){
  //   message.delete()
    
  // }
    if(!message.guild || !message.channel || message.author.bot) return;
    if(message.channel.partial) await message.channel.fetch();
    if(message.partial) await message.fetch();
    client.settings.ensure(message.guild.id, {
      prefix: config.prefix,
      defaultvolume: 50,
      defaultautoplay: false,
      defaultfilters: [`bassboost6`, `clear`],
      djroles: [],
      botchannel: []
    })
    let custom;
    let prefix = await prefixSchema.findOne({ Guild : message.guild.id })
    .catch(err => console.log(err))
    if(prefix) {
      custom = prefix.Prefix;
  } else {
      custom = config.prefix;
  }
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(custom)})`);
    if(!prefixRegex.test(message.content)) return;
    const [, mPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(mPrefix.length).trim().split(/ +/).filter(Boolean);
    const cmd = args.length > 0 ? args.shift().toLowerCase() : null;
    if(!cmd || cmd.length == 0){
        if(mPrefix.includes(client.user.id)){
            message.reply({embeds: [new Discord.MessageEmbed().setColor(ee.color).setFooter(ee.footertext, ee.footericon).setTitle(`:thumbsup: **My Prefix here, is __\`${custom}\`__**`)]})
        }
        return;
    }
    let command = client.commands.get(cmd);

    //  if(command.premium && !(await premiumSchema.findOne({ User: message.author.id }))) return message.reply("You need to upgrade to premium to use this command")
    
    
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
      if(command.premium && !(await premiumSchema.findOne({ User: message.author.id }))) return message.reply("You need to upgrade to premium to use this command") 
      let botchannels = client.settings.get(message.guild.id, `botchannel`);
      if(!botchannels || !Array.isArray(botchannels)) botchannels = [];
        if (botchannels.length > 0) {
            if (!botchannels.includes(message.channel.id) && !message.member.permissions.has("ADMINISTRATOR")) {
               return message.reply({
                 embeds: [new Discord.MessageEmbed()
                 .setColor(ee.wrongcolor)
                 .setFooter(ee.footertext, ee.footericon)
                 .setTitle(`${client.allEmojis.x} **You are not allowed to use this Command in here!**`)
                  .setDescription(`Please do it in one of those:\n> ${botchannels.map(c=>`<#${c}>`).join(", ")}`)
                ]
               })
            }
        }
        //Check if user is on cooldown with the cmd, with Tomato#6966's Function from /handlers/functions.js
        if (onCoolDown(message, command)) {
          return message.reply({
            embeds: [new Discord.MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle(replacemsg(settings.messages.cooldown, {
                prefix: custom,
                command: command,
                timeLeft: onCoolDown(message, command)
              }))]
          });
        }
        try {
          //if Command has specific permission return error
          if (command.memberpermissions && command.memberpermissions.length > 0 && !message.member.permissions.has(command.memberpermissions)) {
            return message.reply({ embeds: [new Discord.MessageEmbed()
                .setColor(ee.wrongcolor)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(replacemsg(settings.messages.notallowed_to_exec_cmd.title))
                .setDescription(replacemsg(settings.messages.notallowed_to_exec_cmd.description.memberpermissions, {
                  command: command,
                  prefix: custom
                }))]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, settings.timeout.notallowed_to_exec_cmd.memberpermissions)}).catch((e) => {console.log(String(e).grey)});
          }
          //if Command has specific needed roles return error
          if (command.requiredroles && command.requiredroles.length > 0 && message.member.roles.cache.size > 0 && !message.member.roles.cache.some(r => command.requiredroles.includes(r.id))) {
            return message.reply({embeds: [new Discord.MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle(replacemsg(settings.messages.notallowed_to_exec_cmd.title))
              .setDescription(replacemsg(settings.messages.notallowed_to_exec_cmd.description.requiredroles, {
                command: command,
                prefix: custom
              }))]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, settings.timeout.notallowed_to_exec_cmd.requiredroles)}).catch((e) => {console.log(String(e).grey)});
            
          }
          //if Command has specific users return error
          if (command.alloweduserids && command.alloweduserids.length > 0 && !command.alloweduserids.includes(message.author.id)) {
            return message.reply({embeds: [new Discord.MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle(replacemsg(settings.messages.notallowed_to_exec_cmd.title))
              .setDescription(replacemsg(settings.messages.notallowed_to_exec_cmd.description.alloweduserids, {
                command: command,
                prefix: custom
              }))]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, settings.timeout.notallowed_to_exec_cmd.alloweduserids)}).catch((e) => {console.log(String(e).grey)});
          }
          //if command has minimum args, and user dont entered enough, return error
          if(command.minargs && command.minargs > 0 && args.length < command.minargs) {
            return message.reply({embeds: [new Discord.MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle(`${client.allEmojis.x} Wrong Command Usage!`)
              .setDescription(command.argsmissing_message && command.argsmissing_message.trim().length > 0 ? command.argsmissing_message : command.usage ? `Usage: ` + command.usage : `Wrong Command Usage`)]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, settings.timeout.minargs)}).catch((e) => {console.log(String(e).grey)});
          }
          //if command has maximum args, and user enters too many, return error
          if(command.maxargs && command.maxargs > 0 && args.length > command.maxargs) {
            return message.reply({embeds: [new Discord.MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle(`${client.allEmojis.x} Wrong Command Usage!`)
              .setDescription(command.argstoomany_message && command.argstoomany_message.trim().length > 0 ? command.argstoomany_message : command.usage ? `Usage: ` + command.usage : `Wrong Command Usage`)]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, settings.timeout.maxargs)}).catch((e) => {console.log(String(e).grey)});
          }
          
          //if command has minimum args (splitted with `++`), and user dont entered enough, return error
          if(command.minplusargs && command.minplusargs > 0 && args.join(` `).split(`++`).filter(Boolean).length < command.minplusargs) {
            return message.reply({embeds: [new Discord.MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle(`${client.allEmojis.x} Wrong Command Usage!`)
              .setDescription(command.argsmissing_message && command.argsmissing_message.trim().length > 0 ? command.argsmissing_message : command.usage ? `Usage: ` + command.usage : `Wrong Command Usage`)]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, settings.timeout.minplusargs)}).catch((e) => {console.log(String(e).grey)});
          }
          //if command has maximum args (splitted with `++`), and user enters too many, return error
          if(command.maxplusargs && command.maxplusargs > 0 && args.join(` `).split(`++`).filter(Boolean).length > command.maxplusargs) {
            return message.reply({embeds: [new Discord.MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, ee.footericon)
              .setTitle(`${client.allEmojis.x} Wrong Command Usage!`)
              .setDescription(command.argstoomany_message && command.argstoomany_message.trim().length > 0 ? command.argsmissing_message : command.usage ? `Usage: ` + command.usage : `Wrong Command Usage`)]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, settings.timeout.maxplusargs)}).catch((e) => {console.log(String(e).grey)});
          }
          //run the command with the parameters:  client, message, args, Cmduser, text, prefix,
          command.run(client, message, args, args.join(` `).split(`++`).filter(Boolean), message.member, args.join(` `), custom);
        } catch (error) {
          if (settings.somethingwentwrong_cmd) {
            return message.reply({
              embeds: [new Discord.MessageEmbed()
                .setColor(ee.wrongcolor)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(replacemsg(settings.messages.somethingwentwrong_cmd.title, {
                  prefix: prefix,
                  command: command
                }))
                .setDescription(replacemsg(settings.messages.somethingwentwrong_cmd.description, {
                  error: error,
                  prefix: prefix,
                  command: command
                }))]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, 4000)}).catch((e) => {console.log(String(e).grey)});
          }
        }
      }
      /* else //if the command is not found send an info msg
        return message.reply({
          embeds: [new Discord.MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(replacemsg(settings.messages.unknown_cmd, {
              prefix: prefix
            }))]
        }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, 4000)}).catch((e) => {console.log(String(e).grey)});*/
        
        client.on('guildDelete', async (guild) => {
          prefixSchema.findOne({ Guild: guild.id }, async (err, data) => {
              if (err) throw err;
              if (data) {
                  prefixSchema.findOneAndDelete({ Guild : guild.id }).then(console.log('deleted data.'))
              }
          })
      })

      
      
      }

/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
function escapeRegex(str) {
    try{
      return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
    }catch{
      return str
    }
}
