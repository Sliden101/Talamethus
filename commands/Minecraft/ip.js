const { MessageEmbed } = require("discord.js")
const config = require("./config.json")
module.exports.run = async (bot, message, args) => {
    message.channel.send({
        embeds: [new MessageEmbed().setTitle("Here!").setColor("RED").setDescription(`IP: ${config.ip}ms`)]
    });
}
module.exports.info = {
    name: 'ip', // default = file name (without the extention)
    description: "Shows the server's ip." // default is "None"
}
