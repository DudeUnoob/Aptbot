const ms = require('ms')

module.exports = {
    name:'reroll-giveaway',
    description:'rerolls a giveaway',
    memberpermissions:['ADMINISTRATOR'],  

    options:[
        {"String":{ name: 'message_id', description:'Put in the message id of the giveaway', required: true }},
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

        const messageId = options.getString('message_id');

        client.giveawaysManager.reroll(messageId).then(() => {
            interaction.channel.send('Success! Giveaway rerolled')
        }).catch((err) => {
            interaction.channel.send(`An error occured, please check and try again.\n\`${err}\``)
        })
    }
}