module.exports = {
    name: 'kick',
    description: 'Will tell you who you wanted to kick (will not actually kick them YET)',
    execute(message, args, command) {
        const taggedUser = message.mentions.users.first();
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user to kick someone!');
        }
        message.channel.send('You wanted to kick ' + taggedUser.username);
    },
};