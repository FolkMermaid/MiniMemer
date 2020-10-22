const emotes = require("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send({
      embed: { color: embedFail, description: `get in a voice channel first` }
    });

  if (!args[0])
    return message.channel.send({
      embed: {
        color: embedFail,
        description: `put a song in the queue`
      }
    });

  const aSongIsAlreadyPlaying = client.player.isPlaying(message.guild.id);

  // If there's already a song playing
  if (aSongIsAlreadyPlaying) {
    // Add the song to the queue
    const song = await client.player.addToQueue(
      message.guild.id,
      args.join(" ")
    );
    message.channel.send({
      embed: {
        color: embedSuccess,
        description: `\`${song.name}\` Now Playing`
      }
    });
  } else {
    // Else, play the song
    const song = await client.player.play(
      message.member.voice.channel,
      args.join(" ")
    );
    message.channel.send({
      embed: {
        color: embedSuccess,
        description: `Now Playing:\n\`${song.name}\``
      }
    });
    song.queue.on("end", () => {
      message.channel.send({
        embed: {
          color: embedFail,
          description: `i ran out of songs to play, gimme mor`
        }
      });
    });
  }
};

module.exports.config = {
  name: "play",
  aliases: ["p"]
};