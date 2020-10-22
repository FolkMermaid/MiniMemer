const Discord = require("discord.js");
const fs = require("fs");
const emotes = require("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {
  if (!message.member.voice.channel)
    return message.channel.send({
      embed: { color: embedFail, description: `you must be in a voice channel` }
    });

  if (!client.player.isPlaying(message.guild.id))
    return message.channel.send({
      embed: { color: embedFail, description: `nothing is being played` }
    });

  const song = await client.player.pause(message.guild.id);

  message.channel.send({
    embed: {
      color: embedSuccess,
      description: `\`${song.name}\` has been paused`
    }
  });
};

module.exports.config = {
  name: "pause",
  aliases: []
};
