const ms = require('ms')

module.exports = {
    name:'edit-giveaway',
    description:'edits a giveaway',
    memberpermissions:['ADMINISTRATOR'],
    options:[
        {"String":{ name:'message_id', description:"What's the message id of the giveaway you want to edit?", required: true }},
        {"Integer":{ name: 'duration', description:'How much time do you want to add?', required: false }},
        {"String":{name: 'prize', description: 'What is the prize you want to add or change', required: false}},
        {"Integer": {name: 'winners', description:'edit the amount of winners on the giveaway', required: false}},
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

        const messageId = options.getString('message_id')
        const time = options.getInteger('duration')
        const prize = options.getString('prize')
        const winners = options.getString('winners')

        client.giveawaysManager.edit(messageId, {
            addTime: ms(time),
            newWinnerCount: winners,
            newPrize: prize,
        }).then(() => {
            interaction.channel.send('Success! giveaway updated')
        }).catch((err) => {
            interaction.channel.send(`An error occured, please try again. \n\`${err}\``);
        })
    }
}