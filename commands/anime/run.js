const { MessageEmbed } = import("discord.js")

module.exports.run = async (bot, message, args) => {
    let { randapi } = import(ROOT_PATH + '/index');
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
    name: 'run', // default = file name (without the extention)
    description: "Send a run gif." // default is "None" //sponse
}