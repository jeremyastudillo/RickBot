module.exports = {
    name: 'frintezza',
    description: 'Info Boss Scarlet van Halisha',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0xcc0000 ,
                title: 'Raid Boss',
                fields: [{
                    name: '**Scarlet van Halisha**',
                    value: 'Level: 85',
                },
                {
                    name: '**Ubicación**',
                    value: 'Last Imperial Tomb'
                },
                {
                    name: '**Drops**',
                    value: 'Frintezza\'s Necklace, Vorpal Armors(Light, Robe, Heavy), Elegia Armors(Light, Robe, Heavy)'
                }

                ],
                image: {
                    url: 'http://la2informer.ru/files/frinta/frintezza2.jpg'
                }
            }
        })
    },
};