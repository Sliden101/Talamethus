const { MessageEmbed } = import("discord.js")
const config = import("../../config.json")
module.exports.run = async (bot, message, args) => {
    message.channel.send({
        embeds: [
        new MessageEmbed()
            .setTitle("Here!")
            .setColor("RANDOM")
            .setDescription(`IP: ${config.ip}`)
        ]
    });
}
module.exports.info = {
    name: 'ip', // default = file name (without the extention)
    description: "Shows the server's ip." // default is "None"
}
