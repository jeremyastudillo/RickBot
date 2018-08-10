module.exports = {
    name: 'freya',
    description: 'Info Boss Freya',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0x00ffff ,
                title: 'Raid Boss',
                fields: [{
                    name: '**Freya**',
                    value: 'Level: 85',
                },
                {
                    name: '**Ubicación**',
                    value: 'Ice Queens Castle'
                },
                {
                    name: '**Drops**',
                    value: 'Freya\'s Necklace, Vesper Jewells, Ice Queen\'s Tiara, Vesper Armors(Light, Robe, Heavy), Blessed Scroll: Enchant Armor (S-grade),  Sealed Cloak of Freya.'
                }

                ],
                image: {
                    url: 'https://l2central.info/w/images/2/2f/Mob_29179.jpg'
                }
            }
        })
    },
};