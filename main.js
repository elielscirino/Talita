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
    if (msg.content === "?help") {
        msg.reply(
            '```\n' +
            'Comandos:\n' +
            '*****************************************\n'+
            '?help\nExibe lista de comandos.\n' +
            '*****************************************\n' +
            '?recomendado\nExibe recomendação de filme bem avaliado.\n' +
            '*****************************************\n' +
            '?popular\nExibe recomendação de filme popular.\n' + 
            '*****************************************\n' +
            '?terror\nExibe recomendação de filme de terror.\n' + 
            '*****************************************\n' +
            '?drama\nExibe recomendação de filme de drama.\n' + 
            '*****************************************\n' +
            '?romance\nExibe recomendação de filme de romance.\n' + 
            '*****************************************\n' +
            '?comedia\nExibe recomendação de filme de comedia.\n' + 
            '*****************************************\n' +
            '?scifi\nExibe recomendação de filme de ficção científica.\n' + 
            '*****************************************\n' +
            '?acao\nExibe recomendação de filme de ação.\n' + 
            '*****************************************\n' +
            '?misterio\nExibe recomendação de filme de mistério.\n' + 
            '*****************************************\n' +
            '```'
        );
    }

    switch (msg.content) {
        case '?popular':
            func.getPopular(msg, imp.config.apiToken);
            break;
        case '?recomendado':
            func.getTopRated(msg, imp.config.apiToken);
            break;
        case '?terror':
            func.getByGenre(msg, imp.config.apiToken, 27);
            break;
        case '?drama':
            func.getByGenre(msg, imp.config.apiToken, 18);
            break;
        case '?comedia':
            func.getByGenre(msg, imp.config.apiToken, 35);
            break;
        case '?romance':
            func.getByGenre(msg, imp.config.apiToken, 10749);
            break;
        case '?scifi':
            func.getByGenre(msg, imp.config.apiToken, 878);
            break;
        case '?acao':
            func.getByGenre(msg, imp.config.apiToken, 28);
            break;
        case '?misterio':
            func.getByGenre(msg, imp.config.apiToken, 9648);
            break;
    }
});

client.login(imp.config.botToken);