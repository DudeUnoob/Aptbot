const { MessageEmbed } = module.require('discord.js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name:'tweet',
    description:'tweet something as yourself or someone else!',
    premium: true,

    run: async(client,message,args) => {
        const tweet = args.join(" ");
        if (!tweet) {
          return message.channel.send("`Type something to tweet lmao`");
        }
        let user = message.author.username
        if (tweet.length > 200) tweet = tweet.slice(0, 197) + "...";
    
        if(user){
          const res = await fetch(
            `https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=` + tweet
          );
          const img = (await res.json()).message;
          message.channel.send({
            files: [{ attachment: img, name: "tweet.png" }],
          });
        }

        let mentioned = message.mentions.users.first().username;
        if(mentioned){
            const res = await fetch(
                `https://nekobot.xyz/api/imagegen?type=tweet&username=${mentioned}&text=` + tweet
            )
            const img2 = (await res.json()).message;
            message.channel.send({
                files: [{ attachment: img2, name: 'tweeted.png '}],
            });
        }
        
    }
}

