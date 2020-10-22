const emotes = require("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {
  if (!message.member.voice.channel)
    return message.channel.send({
      embed: { color: embedFail, description: `get in a voice channel` }
    });

  const song = await client.player.resume(message.guild.id);

  if (!song)
    return message.channel.send({
      embed: { color: embedFail, description: `nothing is being played` }
    });

  message.channel.send({
    embed: {
      color: embedSuccess,
      description: `\`${song.name}\` has been resumed`
    }
  });
};

module.exports.config = {
  name: "resume",
  aliases: []
};
