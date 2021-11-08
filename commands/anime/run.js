const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let { randapi } = require(ROOT_PATH + '/index');
    const run = await randapi.getRun()
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setImage(run)
            ]
    });
}

/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'runs', // default = file name (without the extention)
    description: "Send a run gif." // default is "None" //sponse
}