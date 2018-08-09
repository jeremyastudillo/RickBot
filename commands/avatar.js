module.exports = {
	name: 'avatar',
	description: 'Muestra tu avatar o del usuario que menciones.',
	aliases: ['icon'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Tu avatar: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username} avatar: ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
	},
};