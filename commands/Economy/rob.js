module.exports = {
    name:'rob',
    description:'rob another user of their money',
    category:'Economy',
    cooldown: 300,

    run: async(client,message,args) => {

        let author = message.author.id
        let member = message.mentions.members.first()

        if(!member){
            return message.reply('Please specify a member you want to rob from!')
        }

        let bal = await client.bal(member.id)

        if(bal < 250){
            return message.reply('This person does not have at least 250 :coin:')
        }
        
        let algorithm = Math.floor(Math.random() * 0.05 * bal)
        


        client.add(author, algorithm)

        message.reply(`You have robbed ${algorithm} from ${member}`)

        client.rmv(member.id, algorithm)


    }
}