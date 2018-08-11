module.exports = {
    name: 'windstone',
    description: 'Info Wind Stone',
    execute(message, args){
        message.channel.send({
            embed:{
                color: 0x206868 ,
                title: 'Item',
                image: {
                    url: 'https://l2wiki.com/images/f/fb/Item_9549.jpg'
                },
                fields: [{
                    name: '**Wind Stone**',
                    value: 'Wind Attack +5 - Wind Defense +6'
                },
                {
                    name: '**Drops:**',
                    value: '*(Ubicación)*'
                    
                },
                {
                    name: '__**Antharas Lair**__ *Level 85*',
                    value: 'Bloody Karik, Land Dragon\'s Patrol Knoriks, Bloody Berserker, Bloody Karinness, Maluk Leader, Maluk Warlord, Maluk Princess, Maluk Banshee, Maluk Hunter,Maluk Sniper.'
                },
                {
                    name: '__**Dragon Valley**__ *Level 81-82*',
                    value: 'Metallic Cave Servant, Cave Servant Warrior, Iron Cave Servant, Dragonblood Captain, Cave Servant Archer, Dragonblood Minion, Headless Knight.'
                },
                {
                    name: '__**Delusion Chamber**__ *Level 82*',
                    value: 'Nihil Invader Assassin, Nihil Invader Archer, Nihil Invader Shaman.'
                },
                ],
               
            }
        })
    },
};