module.exports = {
    name: 'zaken',
    description: 'Info Zaken',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0x006666 ,
                title: 'Raid Boss',
                fields: [{
                    name: '**Zaken**',
                    value: 'Level: 60',
                },
                {
                    name: '**Ubicación**',
                    value: 'Cavern of the Pirate Captain (Daydream)'
                },
                {
                    name: '**Drops**',
                    value: 'Zaken\'s Earring, Scroll: Enchant Armor - Weapon(A-grade), Scroll: Enchant Armor (A-grade), Pirate Hat, Tallum Blade, Elemental Sword.'
                }

                ],
                image: {
                    url: 'https://st3-eu.4game.com/-/3058305581/lineage2classic/play/zaken/hunting-zones/Zaken_en.jpg'
                }
            }
        })
    },
};