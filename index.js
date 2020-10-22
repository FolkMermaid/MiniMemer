const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log('${bot.user.username} Is online!');
});

bot.login(process.env.token);