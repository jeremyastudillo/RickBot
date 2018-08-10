module.exports = {
    name: 'valakas',
    description: 'Info Boss Valakas',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0xff0000 ,
                title: 'Raid Boss',
                fields: [{
                    name: '**Valakas**',
                    value: 'Level: 104',
                },
                {
                    name: '**Ubicación**',
                    value: 'Valakas Lair'
                },
                {
                    name: '**Drops**',
                    value: 'Valakas\' Necklace, Eternal Armors(Light,Robe,Heavy), Helios Weapons, Valakas Weapons(Fragments).'
                }

                ],
                image: {
                    url: 'https://i.makeagif.com/media/4-22-2015/kCa-K_.gif'
                }
            }
        })
    },
};