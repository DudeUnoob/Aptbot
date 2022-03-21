const { FastType } = require('weky')

module.exports = {
    name:'fasttype',
    description:'Have a typing competition with someone!',
    category:'Fun',

    run: async(client,message,args) => {
    
        
        let sentences= [
            'so fat not even Dora can explore her',
            'so fat I swerved to miss her and ran out of gas',
            'so smelly she put on Right Guard and it went left',
            'so fat she hasnt got cellulite shes got celluheavy',
            'so fat she dont need no internet shes already world wide',
            'so hair her armpits look like Don King in a headlock',
            'so classless she could be a Marxist utopia',
            'so fat she can hear bacon cooking in Canada',
            'so fat she won The Bachelor because she all those other bitches',
            'so stupid she believes everything that Brian Williams says',
            'so ugly she scared off Flavor Flav',
            'is like Dominos Pizza, one call does it all',
            'is twice the man you are',
            'is like an ATM open 24/7'
        ];
        let result = Math.floor((Math.random() * sentences.length));
        await FastType({
            message: message,
            embed: {
                title: 'FastType | Game',
                description: 'You have **{{time}}** to type the below sentence.',
                color: '#5865F2',
                footer: 'Your host: Pog Bot',
                timestamp: true
            },
            sentence: sentences[result],
            winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
            loseMessage: 'Better luck next time!',
            cancelMessage: 'You ended the game!',
            time: 60000,
            buttonText: 'Cancel',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });
    }
}