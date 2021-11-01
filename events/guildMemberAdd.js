let { bot } = require(ROOT_PATH + "/index")
const config = require(ROOT_PATH + "/config.json")

bot.on('guildMemberAdd', member => {
	const welcome_channel = bot.channels.cache.get(config.welcome);
	welcome_channel.send(`<@${member.id}> https://media.discordapp.net/attachments/851132569936461837/904224457403547719/hey-hey-ai-hayasaka.gif`);
	let Role_Testrole = member.guild.roles.cache.find(r => r.name === "Members");
	member.roles.add(Role_Testrole).catch(console.error);
 });