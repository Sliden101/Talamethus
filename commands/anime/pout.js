const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let { randapi } = require(ROOT_PATH + '/index');
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
    name: 'pout', // default = file name (without the extention)
    description: "Sends a pout gif." // default is "None" //sponse
}