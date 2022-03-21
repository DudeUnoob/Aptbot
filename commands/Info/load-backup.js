const backup = require('discord-backup');

module.exports = {
    name:'load-backup',
    memberpermissions:['ADMINISTRATOR'],
    aliases:['lbackup','backup-load'],
    description:'Load the backup that you created!',
    category:'Info',


    run: async  (client, message, args) => {
        
        let backupID = args[0];
        let confirmation = args[1]
        if(!backupID){
            return message.channel.send(":x: | You must specify a valid backup ID!");
        }
        if(!args[1]){
            return message.reply('Please send a confirmation message of `-confirm` that you want to load the backup, will delete all server data or `-cancel` to cancel it')
        }

        if(args[1] === "-confirm"){
        // Fetching the backup to know if it exists
        backup.fetch(backupID).then(async () => {
            // If the backup exists, request for confirmation
            // message.channel.send(":warning: | When the backup is loaded, all the channels, roles, etc. will be replaced! Type `-confirm` to confirm!");
            //     await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "-confirm"), {
            //         max: 1,
            //         time: 20000,
            //         errors: ["time"]
            //     }).catch((err) => {
            //         // if the author of the commands does not confirm the backup loading
            //         return message.channel.send(":x: | Time's up! Cancelled backup loading!");
            //     });
            //     // When the author of the command has confirmed that he wants to load the backup on his server
            //     message.author.send(":white_check_mark: | Start loading the backup!");
            //     // Load the backup
                backup.load(backupID, message.guild).then(() => {
                    // When the backup is loaded, delete them from the server
                    backup.remove(backupID);
                }).catch((err) => {
                    // If an error occurred
                    return message.author.send(":x: | Sorry, an error occurred... Please check that I have administrator permissions!");
                });
        }).catch((err) => {
            console.log(err);
            // if the backup wasn't found
            return message.channel.send(":x: | No backup found for `"+backupID+"`!");
        });
    }

    if(args[1] === "-cancel"){
        return message.reply('Backup loading canceled')
    }
    
    }
}

