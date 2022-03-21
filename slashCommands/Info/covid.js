const covid = require('covid19-api');
const Discord = require('discord.js')
const jaro = require('jaro-winkler');

module.exports = {
    name:'covid',
    description:'covid stats for countries or the world',
    category:'Info',

    options:[
        {"String": {name: 'country', description:'Which country do you want to get covid info on?', required: false}},
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

        const args = options.getString('country')

        interaction.deferReply();
        let res;
        let country;
        let covidImg = 'https://media.discordapp.net/attachments/239446877953720321/691020838379716698/unknown.png'

        res = await covid.getReports(); // Fetching the Data
        res = res[0][0];

        if (!args || ['world', 'global', 'earth'].includes(args)) country = 'World';
        else {
            let search = [];
            res.table[0].forEach(v => {
                search.push({ country: v.Country, match: jaro(v.Country, args, { caseSensitive: false }) });
            });
            search.sort((a, b) => {
                if (a.match < b.match) return 1;
                else if (a.match > b.match) return -1;
                else return 0;
            });
            country = search[0].country || 'World';
        }

        let data = res.table[0].find(v => v.Country == country);

        interaction.editReply({
            embeds: [
                new Discord.MessageEmbed()
                    .setAuthor({ name: 'COVID-19 Statistics', iconURL: covidImg })
                    // .setAuthor('COVID-19 Statistics', covidImg) //deprecated
                    .setTitle(data.Country)
                    .setThumbnail(res.flag ?? covidImg)
                    .setColor('RED')
                    .addFields(
                        { name: 'Total Cases', value: data.TotalCases || 'No Data', inline: true },
                        { name: 'Total Deaths', value: data.TotalDeaths || 'No Data', inline: true },
                        { name: 'Total Recoveries', value: data.TotalRecovered || 'No Data', inline: true },
                        { name: 'Active Cases', value: data.ActiveCases || 'No Data', inline: true },
                        { name: 'Mild Condition', value: (+(data.ActiveCases || 0).replaceAll(',', '') - +(data.Serious_Critical || 0).replaceAll(',', '')).toLocaleString(), inline: true },
                        { name: 'Critical Condition', value: data.Serious_Critical || 'No Data', inline: true },
                        { name: 'Cases Today', value: data.NewCases || 'No Data', inline: true },
                        { name: 'Deaths Today', value: data.NewDeaths || 'No Data', inline: true },
                        { name: 'Recoveries Today', value: data.NewRecovered || 'No Data', inline: true },
                        { name: 'Closed Cases', value: (+(data.TotalCases || 0).replaceAll(',', '') - +(data.ActiveCases || 0).replaceAll(',', '')).toLocaleString(), inline: true },
                    )
                    .setTimestamp()
            ]
        })
    }
}