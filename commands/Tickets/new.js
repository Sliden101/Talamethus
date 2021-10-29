const Discord = require('discord.js')
const config = require('./config.json')

exports.run = async(client, message, args) => {
    let category = message.guild.channels.cache.find(c => c.id === config.ticketcategory && c.type === "category");
    let categorybackup = message.guild.channels.cache.find(c => c.id === config.ticketcategorybackup && c.type === "category");
    let categorybackup2 = message.guild.channels.cache.find(c => c.id === config.ticketcategorybackup2 && c.type === "category");
    if (!category || !categorybackup || !categorybackup2) return;

    if (message.guild.channels.cache.find(ch => ch.name.includes(message.author.tag.toString().toLowerCase().replace(' ', '-'))))
        return message.channel.send(`💡 | You **already** have opened **ticket**!`)

    let channel = await message.guild.channels.create("🎫╏" + message.author.tag + "-ticket", "text")

        .catch((err) => {
            console.log(err)
        })



    await channel.setParent(category.id).catch(channel.setParent(categorybackup.id).catch(channel.setParent(categorybackup2.id).catch(console.error)));

    setTimeout(() => {

        channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        });

        channel.updateOverwrite(message.author.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        });

        channel.updateOverwrite(config.staffid, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        })

    }, 1000);

    message.channel.send(`🎫 | **You've** opened a **ticket**, you can **check** it out **here**: ${channel}.`)

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} | Tickets`, client.user.avatarURL())
            .setDescription(`> You **succesfully** made a **ticket**, please **do not** ping staff it will not fix **your problem** faster.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
        channel.send(`${message.author}`, embed)
