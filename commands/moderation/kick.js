const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) =>{
    if (message.member.hasPermission("KICK_MEMBERS")) {
        if (message.members.mentions.first()) {
            try {
                message.members.mentions.first().kick();
            } catch {
                message.reply("I do not have permissions to kick " + message.members.mentions.first());
            }
        } else {
            message.reply("You do not have permissions to kick " + message.members.mentions.first());
        }
    }
}
module.exports.info = {
    name: 'kick', // default = file name (without the extention)
    description: "Kicks the mentioned user." // default is "None"
}