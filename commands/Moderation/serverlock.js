const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "serverlock",
  aliases: [],
  memberpermissions:['MANAGE_GUILD'],
  category:'Moderation',
  description:'locks the server: text, vc, all',
  usage:'<pfx>serverlock text, <pfx>serverlock vc, <pfx>serverlock all',
  run: async(client, message, args) => {
     let embed = db.fetch(`embed_${message.guild.id}`);
    

    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = "$";
    }
      if(!content)
    {
      message.channel.send(`You didnt gave me an text or vc option e.g - ${prefix}serverlock text/vc/all/hide`);
      return;
    }
    if (content.toLowerCase() === "text") 
    {
      message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "text")
 ch.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     deny: ['SEND_MESSAGES'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have Locked the all text Channels which are in server`)
}
if (content.toLowerCase() === "vc") 
    {
        message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "voice")
 ch.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     deny: ['CONNECT'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have Locked the all voice Channels which were in server`)
    }
     if (content.toLowerCase() === "all") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     deny: ['CONNECT', 'SEND_MESSAGES'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have Locked the all voice  AND TEXT Channels which were in server`)
    }
       if (content.toLowerCase() === "hide") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have hidden the all voice  AND TEXT Channels which were in server`)
    }

}
}
