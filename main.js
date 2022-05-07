const  imp = require('./config');
const func = require('./functions')

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
    console.log(`${client.user.tag} está online!`)
});

client.on("messageCreate", msg => {
    if (msg.content === ".help") {
        msg.reply(
        '.help -> Exibe lista de comandos.\n' +
        '.recomendado -> Exibe recomendação de filme bem avaliado.\n' +
        '.popular -> Exibe recomendação de filme popular.'
        );
    }
    if (msg.content === ".popular") {
        func.getPopular(msg, imp.config.apiToken);
    }
    if (msg.content === ".recomendado") {
        func.getTopRated(msg, imp.config.apiToken);
    }
  });

client.login(imp.config.botToken);