const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let { randapi } = require(ROOT_PATH + '/index');
    const hug = await randapi.getHug()
    let sender = message.author
    let recp = message.mentions.users.first()
    if (!recp) return message.reply('You need to mention a user.')
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${sender} hugs <@!${recp.id}>`)
            .setImage(hug)
            ]
    });
}

/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'hug', // default = file name (without the extention)
    description: "Hugs someone." // default is "None" //sponse
}