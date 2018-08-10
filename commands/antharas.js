module.exports = {
    name: 'antharas',
    description: 'Info Boss Antharas',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0x003366 ,
                title: 'Raid Boss',
                fields: [{
                    name: '**Antharas**',
                    value: 'Level: 104',
                },
                {
                    name: '**Ubicación**',
                    value: 'Nest of Antharas'
                },
                {
                    name: '**Drops**',
                    value: ' Antharas\' Earring, Eternal Armors(Light,Robe,Heavy), Antharas Dual Sword, Antharas Weapons(Fragments).'
                }

                ],
                image: {
                    url: 'https://cs6.pikabu.ru/images/big_size_comm/2015-04_1/14279742714896.jpg'
                }
            }
        })
    },
};