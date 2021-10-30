const bot
const { Collection } = require('discord.js')
const config = require('../config.json')
const voiceCollection = new Collection();


bot.on("voiceStateUpdate", async (oldState, newState) => {
    const user = await client.users.fetch(newState.id)
    const member = newState.guild.member(user);

    if (!oldState.channel && newState.channel.id === config.vcchild) {
        const channel = await newState.guild.channels.create(user.tag, {
            type: 'voice',
            parent: newState.channel.parent,
        });
        member.voice.setChannel(channel);
        voiceCollection.set(user.id, channel.id);
    } else if(!newState.channel){
        if (oldState.channel === voiceCollection.get(newstate.id)) 
        return oldState.channel.delete()
    }
})