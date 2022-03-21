const Discord = require('discord.js')

module.exports = {
    name:'search',
    description:'search somewhere to earn money!',
    category:'Economy',
    cooldown: 3600,

    run: async(client, message, args) => {
        
        let searchPlaces = [
            'Discord',
            'House',
            'Ur mom',
            'Dumpster',
            'Bank'
        ]
       
        let result = Math.floor((Math.random() * searchPlaces.length));
        
        // if(result2 === result){
        //     Math.floor((Math.random() * searchPlaces.length))
        // }

        // while(result2 == result){
        //     Math.floor((Math.random() * searchPlaces2.length));
        //     console.log(searchPlaces2[result2])
        // }

        // while(result3 == result){
        //     Math.floor((Math.random() * searchPlaces3.length));
        //     console.log(searchPlaces3[result3])
        // }
        console.log(searchPlaces[result])
        
        if(searchPlaces[result] === 'Discord'){
            console.log('got discord')
            client.add(Math.floor(Math.random() * 1500) + 1)
        }
        if(searchPlaces[result] === 'Ur mom'){
            console.log('got ur mom')
            client.add(Math.floor(Math.random() * 3000) + 1)
        }
        if(searchPlaces[result] === 'Dumpster'){
            console.log('got dumpster')
            client.add(Math.floor(Math.random() * 500) + 1)
        }
        if(searchPlaces[result] === 'Bank'){
            console.log('got bank')
            client.add(Math.floor(Math.random() * 4000) + 1)
        }
        if(searchPlaces[result] === 'House'){
            console.log('got house')
            client.add(Math.floor(Math.random() * 2000) + 1)
        }
    }
}