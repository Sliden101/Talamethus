const { MessageEmbed } = import("discord.js")

module.exports.run = async (bot, message, args) => {
    let { randapi } = import(ROOT_PATH + '/index');
    const pat = await randapi.getPat()
    let sender = message.author
    let recp = message.mentions.users.first()
    if (!recp) return message.reply('You need to mention a user.')
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${sender} pats <@!${recp.id}>`)
            .setImage(pat)
            ]
    });
}

/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'pat', // default = file name (without the extention)
    description: "Pats someone." // default is "None" //sponse
}