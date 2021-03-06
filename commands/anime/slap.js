const { MessageEmbed } = import("discord.js")

module.exports.run = async (bot, message, args) => {
    let { randapi } = import(ROOT_PATH + '/index');
    const slap = await randapi.getSlap()
    let sender = message.author
    let recp = message.mentions.users.first()
    if (!recp) return message.reply('You need to mention a user.')
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${sender} slaps <@!${recp.id}>`)
            .setImage(slap)
            ]
    });
}

/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'slap', // default = file name (without the extention)
    description: "Slaps someone." // default is "None" //sponse
}