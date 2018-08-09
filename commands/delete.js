module.exports = {
	name: 'delete',
	description: 'Borra hasta 99 mensajes.',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('no es un numero valido.');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('Escribe un numero ente 1 a 99');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('Error al borrar mensajes en este canal');
		});
	},
};