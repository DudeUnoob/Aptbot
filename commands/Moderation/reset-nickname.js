
module.exports = {
    name:'reset-nickname',
    aliases:['reset-nick','nick-reset','nreset'],
    description:'Resets the nickname of the mentioned user',
    category:'Moderation',
    memberpermissions:['MANAGE_NICKNAMES'],

    run: async(client, message, args) => {

        let member = message.mentions.members.first()

        member.setNickname(null)
    }
}