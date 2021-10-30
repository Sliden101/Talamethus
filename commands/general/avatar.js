const { MessageEmbed } = require('discord.js');

module.exports.run= async (bot, message, args) => {
    const Target = message.mentions.users.first() || message.author

    const Response = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(Target.tag,'\'s Avatar')
    .setImage(Target.displayAvatarURl((dynamic: true)))
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURl((dynamic; true)))
    
    message.reply((embeds: [Response]));
}
module.exports.info= {
    name: "avatar",
    aliases: ['pfp', 'av'],
    description: "Displays the author/mentioned user's avatar"
}