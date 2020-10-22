const emotes = require("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {
  if (!message.member.voice.channel)
    return message.channel.send({
      embed: { color: embedFail, description: `get in a voice chattt` }
    });

  if (!client.player.isPlaying(message.guild.id))
    return message.channel.send({
      embed: { color: embedFail, description: `nothing is being played..` }
    });

  const repeatMode = client.player.getQueue(message.guild.id).repeatMode;

  if (repeatMode) {
    client.player.setRepeatMode(message.guild.id, false);
    return message.channel.send({
      embed: { color: embedSuccess, description: `repeat mode got disabled` }
    });
  } else {
    client.player.setRepeatMode(message.guild.id, true);
    return message.channel.send({
      embed: { color: embedSuccess, description: `repeat mode got enabled` }
    });
  }
};

module.exports.config = {
  name: "loop",
  aliases: ["repeat"]
};
