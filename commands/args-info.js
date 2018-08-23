module.exports = {
    name: 'args-info',
    description: 'Will display info about your inputed arguments.(Debug only)',
    execute(message, args, command) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === 'foo'){
            return message.channel.send('bar');
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}  `);
    },
};