let { bot } = require("../index.js");
const config = require("../config.json")
const usersMap = new Map();
const LIMIT = 7;
const DIFF = 5000;

bot.on('messageCreate', async(message) => {
    if(message.author.bot) return;
    const excluded = config.excludedfromantispam
}) 