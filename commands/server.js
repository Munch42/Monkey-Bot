module.exports = {
    name: 'server',
    description: 'Displays useful server information!',
    execute(message, args) {
        message.channel.send('This servers name is: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);
    },
};