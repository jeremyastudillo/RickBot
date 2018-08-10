module.exports = {
    name: 'baium',
    description: 'Info Boss Baium',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0xffffff ,
                title: 'Raid Boss',
                fields: [{
                    name: '**Baium**',
                    value: 'Level: 75',
                },
                {
                    name: '**Ubicación**',
                    value: 'Tower of Insolence: 9th - 14th Floors'
                },
                {
                    name: '**Drops**',
                    value: 'Ring Of Baium,  Ancient Book - Divine Inspiration, Top-Grade Life Stone 70-76, High-Grade Life Stone 70-76 , Weapons Grade A - S.'
                }

                ],
                image: {
                    url: 'https://vignette.wikia.nocookie.net/lineage-ii/images/6/69/NPC-Baium.png/revision/latest?cb=20160526051551&path-prefix=es'
                }
            }
        })
    },
};