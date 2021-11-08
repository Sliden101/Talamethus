const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const randapi = require("@rilecraft/random-api")
    const punch = await randapi.getPunch()
    let sender = message.author
    let recp = message.mentions.users.first()
    if (!recp) return message.reply('You need to mention a user.')
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${sender} punches <@!${recp.id}>`)
            .setImage(punch)
            ]
    });
}

/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'punch', // default = file name (without the extention)
    description: "Punches someone." // default is "None" //sponse
}