const { MessageEmbed } = require("discord.js")
const rp = require("request-promise");

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
    await rp("https://api.minetools.eu/ping/" + args[0].replace(":", '/')).then((html) => {
    let json = JSON.parse(html);

        if (json.error) return 
        message.channel.send({embeds: [
            new MessageEmbed()
            .setTitle("Error!")
            .setColor("RANDOM")
            .setDescription(`An error occured while attempting to request information from this server.`)
        ]
    });
    message.channel.send ({embeds: [
        var title = "Minecraft Server: {server-ip}"
        var field0 = "Description"
        var field1 = { name: "Players", value: "Online: {online}\nMax: {max}" }
        var field2 = "Version"
        new MessageEmbed()
        .setTitle(title.replace(/{server-ip}/g, args[0]))
        .setColor("RANDOM")
        .setDescription(`${field0, value: json.description.replace(/§[a-z0-9]/g, "")}`)
        .setDescription(`${field1, value:field1.value.replace(/{online}/g, json.players.online).replace(/{max}/g, json.players.max)}`)
        .setDescription(`${field2, value: json.version.name}`)
        .setTimestamp()
        .setFooter("Minecraft Server Information", "https://i.ya-webdesign.com/images/minecraft-png-files-7.png")
    ]
    });
}

module.exports.info = {
    name: 'server', // default = file name (without the extention)
    description: "Shows minecraft server info." // default is "None"
}

