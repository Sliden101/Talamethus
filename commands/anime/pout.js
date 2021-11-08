const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const randapi = require("@rilecraft/random-api")
    const pout = await randapi.getPout()
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setImage(punch)
            ]
    });
}

/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'Pout', // default = file name (without the extention)
    description: "Sends a pout gif." // default is "None" //sponse
}