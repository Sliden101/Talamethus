const { MessageEmbed } = require("discord.js")
const config = require(ROOT_PATH + "/config.json")
const rp = require("request-promise");

module.exports.run = async (bot, message, args) => {
    const server =  { name: "ESASMC", queryURL: "https://api.minetools.eu/query/play.esasmc.com/25565", pingURL: "https://api.minetools.eu/ping/play.esasmc.com/25565" };
//dont want to config this shit lmao im hardcoding 
    let msg = await message.channel.send({embeds: [
        new MessageEmbed()
            .setTitle("Loading server status... This may take a few seconds.")
    ]});
    let fields = []

        await rp(server.pingURL).then(content => {
                const json = JSON.parse(content);
                if (json.error) fields.push({
                    name: "ESASMC:",
                    value: "Offline"
                })
                else {
                    const playerCount = json.players.online;
                    fields.push({
                        name: `ESASMC:`,
                        value: `${playerCount} player(s)`
                    })
                }
        })
        let embed = new MessageEmbed()
            .setTitle("Network Server Status")
            .setTimestamp()
            .setColor("RANDOM")
            .addFields(fields)
        msg.edit({embeds: [embed]});
    }
/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'status', // default = file name (without the extention)
    description: "Shows the status of the server." // default is "None"
}