const googleIt = require('google-it')
const { MessageEmbed } = require(`discord.js`);

module.exports.run = (bot, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Google Search Results")
        .setColor("RANDOM")
        .setTimestamp()
            

    googleIt({'query': args.join(' ')}).then(results => {
        results.forEach(function(item, index) { 
            embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
        });
        
        message.channel.send({embeds:[embed]});
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
    });
};

module.exports.info = {
    name: 'google',
    description: "Google thing."
}