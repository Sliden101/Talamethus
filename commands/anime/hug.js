const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const randapi = require("@rilecraft/random-api")
    const hug = await randapi.getHug()
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Ping: ${bot.ws.ping}ms`)
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