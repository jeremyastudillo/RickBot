module.exports = {
    name: 'vesperstone',
    description: 'Info Vesper Noble Enhancement Stone',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0xffcc00 ,
                title: 'Item',
                fields: [{
                    name: '**Vesper Noble Enhancement Stone**',
                    value: 'Item necesario para actualizar la armadura de Vesper a la armadura Noble Vesper, a través del Maestro Ishuma.',
                },
                {
                    name: '**Mobs**',
                    value: 'Land Dragon\'s Patrol Knoriks, Dragon Knight (**Level 85**)'
                },
                {
                    name: '**Ubicación**',
                    value: 'Antharas Lair'
                }

                ],
               image: {
                   url: 'https://l2wiki.com/images/8/89/Item_14052.jpg'
               }
            }
        })
    },
};