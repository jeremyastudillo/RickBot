module.exports = {
    name: 'fondo',
    description: 'Fondos random',
    execute(message, args){
        const wallpapers = ['https://cdnb.artstation.com/p/assets/images/images/011/354/215/large/muhammx-nafay-album-art-v3.jpg?1529147066',
            'https://images4.alphacoders.com/933/933158.jpg', 'https://images.alphacoders.com/942/942948.png',
            'https://images5.alphacoders.com/924/924750.jpg', 'https://images3.alphacoders.com/910/910303.jpg',
            'https://images5.alphacoders.com/933/933749.jpg', 'https://images.alphacoders.com/933/933794.jpg',
            'https://images8.alphacoders.com/383/383559.png', 'https://cdnb.artstation.com/p/assets/images/images/012/751/105/large/kamila-szutenberg-08b.jpg?1536323371',
            'https://cdna.artstation.com/p/assets/images/images/013/146/572/large/esben-lash-rasmussen-riot-lol-beemo-el-lowres-v012-copy.jpg?1538283150',
            'https://cdna.artstation.com/p/assets/images/images/013/119/260/large/john-kearney-cybertaxifog.jpg?1538137473',
            'https://cdna.artstation.com/p/assets/images/images/012/926/824/large/eric-cassels-d2-10-ecassels.jpg?1537372481',
            'https://cdna.artstation.com/p/assets/images/images/013/150/658/large/vladimir-manyukhin-4.jpg?1538309766',
            'https://cdna.artstation.com/p/assets/images/images/012/940/338/large/chengwei-pan-23.jpg?1537286648',
            'https://cdnb.artstation.com/p/assets/images/images/012/863/069/large/paperblue-net-hangar-spaceship-b.jpg?1536880982',

        ]
        var randoArray = Math.floor(Math.random()* wallpapers.length);
        var wallRandom = wallpapers[randoArray];
        message.channel.send(wallRandom)
}
};