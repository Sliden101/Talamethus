let { bot } = require("../index.js");
const usersMap = new Map();
const LIMIT = 7;
const DIFF = 5000;

bot.on('messageCreate', async(message) => {
    if(message.author.bot) return;
    
}) 