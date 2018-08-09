const Discord = require('discord.js')

module.exports = {
    name: 'userinfo',
    description: 'User info',
    execute(message, args){
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
        },

};   