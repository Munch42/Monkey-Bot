module.exports = {
    name: 'avatar',
    description: 'Will give you a picture of the person you tags avatar.(Leave blank for your own avatar)',
    execute(message, args, command) {
        if (!message.mentions.users.size){
            return message.channel.send(message.author.username + "'s avatar: " + message.author.displayAvatarURL);
        }
        const avatarList = message.mentions.users.map(user =>{
            return `${user.username}'s Avatar: ${user.displayAvatarURL}`;
        });
        message.channel.send(avatarList);
    },
};