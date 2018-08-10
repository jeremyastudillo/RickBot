module.exports = {
    name: 'core',
    description: 'Info Boss Core',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0x33cccc ,
                title: 'Raid Boss',
                fields: [{
                    name: '**Core**',
                    value: 'Level: 50',
                },
                {
                    name: '**Ubicación**',
                    value: 'Cruma Tower '
                },
                {
                    name: '**Drops**',
                    value: 'Ring of Core, Adena.'
                }

                ],
                image: {
                    url: 'https://l2central.info/w/images/a/ad/Mob_29006.jpg'
                }
            }
        })
    },
};