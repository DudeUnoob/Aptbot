
module.exports = {
    name:'nickname',
    aliases:['nick','set-nick'],
    description:'Change or set the nickname of a user in your server',
    memberpersmissions:['MANAGE_NICKNAMES'],
    category:'Moderation',

    run: async(client, message, args) => {

        let member = message.mentions.members.first()

        let nickname = args[1]

        member.setNickname(nickname)
    }
}