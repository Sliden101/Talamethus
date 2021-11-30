const { MessageEmbed } = import("discord.js")
const rp = import("request-promise");
const config = import("../../config.json")
let cum = {name: "Players", value: "Online: {online}\nMax: {max}" };
let cum1 = "Minecraft Server: {server-ip}"
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
                        .setTitle(cum1.replace(/{server-ip}/g, args[0]))
                        .setColor("RANDOM")
                        .setTimestamp()
                        .setFooter("Minecraft Server Information", "https://i.ya-webdesign.com/images/minecraft-png-files-7.png")
                        .addFields({
                            name: "Description",
                            value: json.description.replace(/§[a-z0-9]/g, "")
                        }, {
                            name: cum.name,
                            value: cum.value.replace(/{online}/g, json.players.online).replace(/{max}/g, json.players.max)
                        }, {
                            name: "Version",
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