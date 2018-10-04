module.exports = {
    name: '8ball',
    description: 'Pregunta algo y te respondere algo al azar',
    cooldown: 5,
    execute(message, args){
        const {commands} = message.client;

        const answers = ['Tal vez', 'Definitivamente', 'No lo creo', 'Puede que si', 'Claramente',
                        'Si', 'No', 'Todo aparenta a que si', 'No importa de todos modos vamos a morir']
        var randomizer = Math.floor(Math.random()* answers.length);
        var randomAnswers = answers[randomizer];

        message.channel.send(randomAnswers);

    }
};