const config = require("../config.json");
const { client, updateCache } = require("../index");
const mongo = require("../utils/mongo");
const chalk = require("chalk");

client.on('ready', async () => {
    const guild = client.guilds.cache.get(config.discord.guild);
    guild.members.fetch()
    console.log(`${chalk.greenBright("[BOT]")} Yodayo!`)
    console.log(`${chalk.greenBright("[BOT]")} Bot ready and logged in as ${client.user.tag}`);
    console.log(`${chalk.greenBright("[BOT]")} Cached All members in ${guild.name}`)
});