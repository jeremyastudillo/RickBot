const Discord = require('discord.js')

module.exports = {
    name: 'server',
    description: 'Server Info',
    execute(message, args){
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
    },

};