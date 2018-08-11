module.exports = {
    name: 'earthstone',
    description: 'Info Earth Stone',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0x417505 ,
                title: 'Item',
                image: {
                    url: 'https://l2wiki.com/images/f/fd/Item_9548.jpg'
                },
                fields: [{
                    name: '**Earth Stone**',
                    value: 'Earth Attack +5 - Earht Defense +6'
                },
                {
                    name: '**Drops:**',
                    value: '*(Ubicación)*'
                    
                },
                {
                    name: '__**Antharas Lair**__ *Level 85*',
                    value: 'Dragon Mage, Dragon Knight, Dragon Knight Warrior, Drake Leader, Drake Mage, Drake Warrior,Elite Dragon Knight.'
                },
                {
                    name: '__**Dragon Valley**__ *Level 81-82*',
                    value: 'Gargoyle Dragon, Black Dragon, Emerald Dragon, Sand Dragon, Mesmer Dragon.'
                },
                {
                    name: '__**Delusion Chamber**__ *Level 82*',
                    value: 'Nihil Invader Warrior, Nihil Invader Healer, Nihil Invader Guide, Nihil Invader Destroyer.'
                },
                {
                    name: '__**The Cementery**__ *Level 98 - 99*',
                    value: 'Operations Manager, Royal Guard Captain (Cemetery), Royal Quartermaster, Chief Quartermaster.'
                },
                {
                    name: '__**Chromatic Highlands**__ *Level 82 - 82*',
                    value: 'Shade (type 1), Shade (type 2).'
                },
                {
                    name: '__**Den of Evil**__ *Level 82*',
                    value: 'Spirit Infested Ragna Orc Warrior.'
                },
                {
                    name: '__**Fairy Settlement**__ *Level 89 - 92*',
                    value: 'Brutal Fairy Rogue (Brutal), Mature Satyr Wizard (Mature).'
                },   

                {
                    name: '__**Isle of Souls**__ *Level 94 - 95*',
                    value: 'Spicula Elite Soldier, Light Golem.'
                }, 
                {
                    name: '__**Stakato Nest**__ *Level 83*',
                    value: 'Male Spiked Stakato.'
                }, 
                {
                    name: '__**Forge of the Gods**__ *Level 78*',
                    value: 'Assassin Beetle.'
                },
                {
                    name: '__**Harnak Underground Ruins**__ *Level 85*',
                    value: 'Weiss Khan.'
                }

                ],
               
            }
        })
    },
};