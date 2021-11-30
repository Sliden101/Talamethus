const chalk = import('chalk');
const { MessageEmbed } = import('discord.js');
let { bot } = import('../index');
const config = import(ROOT_PATH + '/config.json');
const { findCommand } = import('../utils/commandHandler');

bot.on('messageCreate', async (message) => {
    if (message.channel.type == 'dm' || message.author.bot == true || !message.content.startsWith(config.prefix)) return;

    let args = message.content.trim().slice(config.prefix.length).split(/ +/);

    let cmd = findCommand([...args], bot.commands, message);

    if (cmd != null) {
        let commandTree = args.slice(0, cmd.depth)
        args = args.slice(cmd.depth);

        if (cmd.subCommands == null) {
            try {
                cmd.run(bot, message, args, commandTree);
            } catch (error) {
                console.log(chalk.bgRedBright("[ERROR]"), `An error occured while trying to execute the ${cmd.name} command!`);
                console.log(error);
            }
        } else {

            message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("PURPLE").setTitle(commandTree.join(" ") + "'s subcommands")
                    .setDescription(cmd.subCommands.map(x => `**${x.name}** - \`${x.description}\`\n*usage:* \`${x.usage}\``).join('\n\n'))
                    .setFooter(`Executed by ${message.author.tag}`).setTimestamp()]
            })

        }

    }
});