const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const schema = require('../../handlers/autorole')

module.exports = {
    name: 'autorole',
    description:'sets autorole in the server',
    category:'Moderation',
    usage:'<prefix>autorole @role',
    memberpermissions:['MANAGE_ROLES'],
    run: async (client, message, args) => {

        const role = await message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

        if (!role) return message.reply('Mention a role');

        schema.findOne({
            guild: message.guild.id
        }, async (err, data) => {
            if (err) throw err
            if (data) {
                message.channel.send('auto role is already setup')
            } else {
                data = new schema({
                    guild: message.guild.id,
                    role: role.id
                })
                await data.save();
                message.channel.send('done!')
            }
        })
    }
}