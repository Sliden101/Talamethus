let { bot } = require(ROOT_PATH + '/index');
const { Collection } = require('discord.js')
const config = require(ROOT_PATH + '/config.json');
const voiceCollection = new Collection();

bot.on("voiceStateUpdate", async (oldState, newState) => {
    const user = await bot.users.fetch(newState.id);
    const member = newState.guild.members.cache.get(newState.id);
    
    if (!oldState.channel && newState.channel.id === config.vcchild) {
        const channel = await newState.guild.channels.create(user.tag, {
            type: 'GUILD_VOICE',
            parent: newState.channel.parent,
        });
        member.voice.setChannel(channel.id);
       
        voiceCollection.set(user.id, channel.id);
    } else if(!newState.channel){
        if (oldState.channelId === voiceCollection.get(newState.id)) 
        return oldState.channel.delete()
    }
})