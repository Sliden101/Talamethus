const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) =>{
    if (msg.member.hasPermission("KICK_MEMBERS")) {
        if (msg.members.mentions.first()) {
            try {
                msg.members.mentions.first().kick();
            } catch {
                msg.reply("I do not have permissions to kick " + msg.members.mentions.first());
            }
        } else {
            msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
        }
    }
module.exports.info = {
    name: 'ban', // default = file name (without the extention)
    description: "Bans the mentioned user." // default is "None"
}