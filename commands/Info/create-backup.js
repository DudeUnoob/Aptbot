const backup = require('discord-backup');
module.exports = {
    name: "backup-create",
    aliases: ["bc"],
    category: "Info",
    usage: "backup-create",
    description: "Get the bot's ping!",
    memberpermissions:['ADMINISTRATOR'],
    run: async (client, message, args) => {
      
        backup.create(message.guild, {
            jsonBeautify: true
        }).then((backupData) => {
            // And send informations to the backup owner
            message.author.send("The backup has been created! To load it, type this command on the server of your choice: `load "+backupData.id+"`!");
            message.channel.send(":white_check_mark: Backup successfully created. The backup ID was sent in dm!");
        });
}
}