const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Info de todos los comando o uno en especifico',
    aliases: ['comandos'],
    usage: ['command name'],
    cooldown: 5,
    execute(message, args){
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Esta es la lista de todos mis comandos:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nPuedes escribir \`${prefix}help [command name]\` para saber mas info sobre ese comando!`);

            return message.author.send(data, { split: true })
                .then(() => {
                if (message.channel.type === 'dm') return;
                message.reply('Revisa tu DM');
                })
            .catch(error => {
                console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                message.reply('No puedo enviarte el DM, ¿Lo tienes desactivado?:thinking:');
    });
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
                return message.reply('Eso no es un comando valido:smile:');
            }

            data.push(`**Nombre:** ${command.name}`);

            if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
            if (command.description) data.push(`**Descripción:** ${command.description}`);
            if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);

            data.push(`**Cooldown:** ${command.cooldown || 3} segundo(s)`);

            message.channel.send(data, { split: true });
        },
};