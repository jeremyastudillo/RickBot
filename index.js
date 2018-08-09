const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();



client.on ('ready',() => {
    console.log('Ready and into the server');
});

client.on('message', message =>{
    if (message.content === `${prefix}test`){
        message.channel.send('`En linea y dentro del Servidor.`');
    }
})




client.on('message', message =>{
    if (message.content === `${prefix}server`){
        let serverIcon = message.guild.iconURL;
        const serverInfo = new Discord.RichEmbed()
        .setDescription('Server Info')
        .setColor('AQUA')
        .setThumbnail(serverIcon)
        .addField('Nombre del servidor:', message.guild.name)
        .addField('Creado el:', message.guild.createdAt)
        .addField('Usuarios:', message.guild.memberCount)
        .addField('Region Actual:', message.guild.region)
        message.channel.send({embed: serverInfo})
    }
});

client.on('message', message =>{
    if (message.content === `${prefix}userinfo`){
        let userIcon = message.author.avatarURL;
        const userInfo = new Discord.RichEmbed()
        .setDescription('User Info')
        .setColor('RANDOM')
        .setThumbnail(userIcon)
        .addField('Nombre de usuario:', message.author.username)
        .addField('Usuario Creado el:', message.author.createdAt)
        .addField('Nitro:', message.author.premium)
        .addField('Estado:', message.author.presence.status)
        .addField('Jugando a:', message.author.presence.game.name)
        message.channel.send({embed: userInfo})
    }
});


client.login(token);