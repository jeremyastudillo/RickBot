
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.on('ready', () => {
	client.user.setStatus('online')
	client.user.setPresence({
		game: {
			name: 'Chill 24/7',
			type : 'STREAMING',
			url: 'https://www.twitch.tv/monstercat'
			
		}
	})
	console.log('Ready!');
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('No puedo ejecutar ese comando en un DM');
	}

	if (command.args && !args.length) {
		let reply = `Necesitas un argumento :rolling_eyes:, ${message.author}!`;

		if (command.usage) {
			reply += `\nEl uso correcto sería... \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Espera ${timeLeft.toFixed(1)} segund(s) para volver a utilzar \`${command.name}\` comando.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply(':warning:Hay un error ejecutando este comando!:warning:');
	}
});

client.on('message', message => {
	if (message.content === `${prefix}infobot`){
		const iconBot = client.user.avatarURL
		const botInfoEmbed = new Discord.RichEmbed()
		.setColor('#4FF141')
		.setTitle('GitHub')
		.setURL('https://github.com/jeremyastudillo/RickBot')
		.setDescription('**Info Comandos:** `$help`')
		.setThumbnail(iconBot)
		.addField('**Nombre:**', client.user.username)
		.addField('**Creado el:**', client.user.createdAt)
		
		message.channel.send({ embed: botInfoEmbed });
	}
})


client.login(token);