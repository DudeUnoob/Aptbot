const ms = require('ms')

module.exports = {
    name:'start-giveaway',
    description:'a giveaway',  
    memberpermissions:['ADMINISTRATOR'],  
    options: [ //OPTIONAL OPTIONS, make the array empty / dont add this option if you don't need options!
    //INFORMATIONS! You can add Options, but mind that the NAME MUST BE LOWERCASED! AND NO SPACES!!!, for the CHOCIES you need to add a array of arrays; [ ["",""] , ["",""] ] 
    //{"Integer": { name: "ping_amount", description: "How many times do you want to ping?", required: true }}, //to use in the code: interacton.getInteger("ping_amount")
    {"String": { name: 'duration', description:'How long?', required: true }},
    {"Integer": { name: 'winners', description:'How many winners?', required: true }},
    {"String": { name: "prize", description:"What's the prize?", required: true }},
    {"Channel": {name:'channel', description:'In what channel?', required: true}},

],

    

     run: async(client, interaction) => {
        const {
            member,
            channelId,
            guildId,
            applicationId,
            commandName,
            deferred,
            replied,
            ephemeral,
            options,
            id,
            createdTimestamp
        } = interaction;
       
       
        const giveawayChannel = options.getChannel('channel');
        const giveawayDuration = options.getString('duration');
        const giveawayWinnerCount = options.getInteger('winners');
        const giveawayPrize = options.getString('prize');
        
        if(!giveawayChannel) {
            return interaction.reply({
                content: ':x: Selected channel is not text-based.',
                ephemeral: true
            });
        }

        client.giveawaysManager.start(giveawayChannel, {
            duration: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinnerCount,
        })
        interaction.reply(`Giveaway started in ${giveawayChannel}`)
    }
}