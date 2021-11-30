const { MessageEmbed } = import("discord.js")

module.exports.run = async (bot, message, args) =>{
    if (message.member.hasPermission("BAN_MEMBERS")) {
        if (message.members.mentions.first()) {
            try {
                message.mentions.users.first().ban();
            } catch {
                message.reply("I do not have permissions to ban" + message.members.mentions.first());
            }
        } else {
            message.reply("You do not have permissions to ban" + message.members.mentions.first());
        }
    }
}

module.exports.info = {
    name: 'ban', // default = file name (without the extention)
    description: "Bans the mentioned user." // default is "None"
}