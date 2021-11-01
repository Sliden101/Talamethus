const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) => {
	const member = message.mentions.members.first() || message.member;
    
    message.channel.send({
		embeds: [
    	new MessageEmbed()
        	.setTitle(`${member.user.tag}'s avatar`)
        	.setImage(member.user.displayAvatarURL({dynamic: true, size: 512 }))
        	.setColor('RANDOM')
			.setDescription('Avatar!')
			.setTimestamp()
		]}
    );
}
module.exports.info = {
    name: 'avatar', // default = file name (without the extention)
    description: "Shows users avatars." // default is "None"
}