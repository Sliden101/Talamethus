const { MessageEmbed } = require("discord.js")
const rp = require("request-promise");
const config = require("../../config.json")
var cum = {name: "Players", value: "Online: {online}\nMax: {max}" };

module.exports.run = async (bot, message, args) => {
            if (args.length < 1) return
                message.channel.send({
                    embeds: [
                        new MessageEmbed()
                        .setTitle("Info!")
                        .setColor("RANDOM")
                        .setDescription(`Usage: ${config.prefix}server ip`)
                        ]
                    });
            await rp("https://api.minetools.eu/ping/" + args[0].replace(":", "/")).then((html) => {
                let json = JSON.parse(html);

                message.channel.send({
                    embeds: [
                        new MessageEmbed()
                        .setTitle(config.title.replace(/{server-ip}/g, args[0]))
                        .setColor("RANDOM")
                        .setTimestamp()
                        .setFooter("Minecraft Server Information", "https://i.ya-webdesign.com/images/minecraft-png-files-7.png")
                        .addFields({
                            name: config.field0,
                            value: json.description.replace(/§[a-z0-9]/g, "")
                        }, {
                            name: cum.name,
                            value: cum.value.replace(/{online}/g, json.players.online).replace(/{max}/g, json.players.max)
                        }, {
                            name: config.field2,
                            value: json.version.name
                        }, )

                    ]
                });
            })
            module.exports.info = {
                name: 'server', // default = file name (without the extention)
                description: "Shows minecraft server info." // default is "None"
            }
    };