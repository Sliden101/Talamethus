const { MessageEmbed } = import("discord.js")

module.exports.run = async (bot, message, args) => {
    let { randapi } = import(ROOT_PATH + '/index');
    const pout = await randapi.getPout()
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setImage(pout)
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