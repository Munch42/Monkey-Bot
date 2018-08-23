module.exports = {
    name: 'user-info',
    description: 'Displays useful user information!',
    execute(message, args) {
        message.channel.send('Your Username: ' + message.author.username + '\nYour Id: ' + message.author.id);
    },
};