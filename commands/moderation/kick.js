const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) =>{
    if (message.member.permissions.has("KICK_MEMBERS")) {
        if (message.mentions.users.first()) {
            try {
                message.mentions.users.first().kick();
            } catch {
                message.reply("I do not have permissions to kick " + message.mentions.users.first());
            }
        } else {
            message.reply("You do not have permissions to kick " + message.mentions.users.first());
        }
    }
}
module.exports.info = {
    name: 'kick', // default = file name (without the extention)
    description: "Kicks the mentioned user." // default is "None"
}