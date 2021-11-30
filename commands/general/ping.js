const { MessageEmbed } = import("discord.js")


module.exports.run = async (bot, message, args) => {
    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setTitle("Pong!")
            .setColor("RED")
            .setDescription(`Ping: ${bot.ws.ping}ms`)
            ]
    });
}

module.exports.info = {
    name: 'ping', // default = file name (without the extention)
    description: "Shows the bot's ping." // default is "None"
}