const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log('${bot.user.username} Is online!');
});

bot.login(process.env.token);

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const settings = require("./config/bot.json"); // The bot connects using the configuration file
const { Player } = require("discord-player"); // Create a new Player (Youtube API key is your Youtube Data v3 key)
const player = new Player(client, settings.youtube_api); // To easily access the player
client.player = player;
client.on("ready", () => {
  console.log("The bot is ready !");
});
const https = require("https");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get(
    `https://glitch.com/edit/#!/minimemermmoosic?path=index.js%3A12%3A36`
  );
}, 280000);
client.login(process.env.TOKEN);
client.on("message", async message => {
  const prefix = settings.prefix;
  const messageArray = message.content.split(" ");
  const cmd = messageArray[0].toLowerCase();
  const args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  const commandfile =
    client.commands.get(cmd.slice(prefix.length)) ||
    client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(client, message, args);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  const jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) {
    return console.log("Couldn't find any commands!");
  }

  jsfiles.forEach(file => {
    console.log(`Loading command ${file}`);

    const command = require(`./commands/${file}`);

    client.commands.set(command.config.name, command);
    command.config.aliases.forEach(alias => {
      client.aliases.set(alias, command.config.name);
    });
  });
});

const prefix = "&";
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "purge")) {
    if (!message.channel.guild)
      return message.reply("this command is for servers only,");
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      var embed3 = new Discord.MessageEmbed()
        .setDescription("You dont have ``MANAGE_MESSAGES`` permission")
        .setColor("RED")
        .setAuthor(
          `Error !`,
          "https://cdn.discordapp.com/emojis/671444290102362141.gif?v=1"
        );
    return message.channel.send(embed3);
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      var embed4 = new Discord.MessageEmbed()
        .setDescription()
        .setColor("RED")
        .setAuthor(
          `Error !`,
          "https://cdn.discordapp.com/emojis/671444290102362141.gif?v=1"
        );
    return message.channel.send("!");
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 99)
      return message
        .reply("**Purging must be less than 100.**")
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel.messages
      .fetch({ limit: messagecount + 1 })
      .then(messages => message.channel.bulkDelete(messages));
    message.channel
      .send(`Deleted messages: ${args}`)
      .then(messages => setTimeout(messages.delete(), 5000));
  }
});
//`**\`purge\`** - Deletes chosen amount of messages**\`bot\`** - Shows Developers + Bot Info\n**\`play [URL/song Title]\`** - Plays The First Song From Youtube\n \`skip\` - skips the currents song\n **\`stop\`** - Stops the music and leave the voice channel.\n **\`queue\` - ** Shows the music queue.\n **\`np\` - ** Shows what is playing now.\n **\`pause\` - ** Stops the song for short time.\n **\`repeat\`** - Repeats the song that is playing now.\n **\`resume\`** - Continue playing from when songs got paused.\n **\`cq\`** - Clears all the queue.\n **\`volume\`** - Changes the volume of the songs.\n **\`shuffle\`** - Plays a song from queue randomly.\n **\`server\`** - Shows all server info`, footer:`Requested by ${message.author.tag}`
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "help")) {
    let embed = new Discord.MessageEmbed()
      .setDescription(
        `&help | &np | &cq | &pause | &play | &queue | &resume | &loop | &vol | &shuffle | &skip | &stop`
      )
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    message.channel.send(embed);
  }
});