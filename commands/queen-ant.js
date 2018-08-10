module.exports = {
    name: 'queenant',
    description: 'Info Boss Queen Ant',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0x999966 ,
                title: 'Raid Boss',
                fields: [{
                    name: '**Queen Ant**',
                    value: 'Level: 40',
                },
                {
                    name: '**Ubicación**',
                    value: 'Ant Nest'
                },
                {
                    name: '**Drops**',
                    value: ' Queen Ant\'s Ring, Adena, Scroll: Enchant Weapon (D-grade).'
                }

                ],
                image: {
                    url: 'https://vignette.wikia.nocookie.net/adn/images/1/1d/Queen_Ant.jpg/revision/latest?cb=20100504165928&path-prefix=es'
                }
            }
        })
    },
};