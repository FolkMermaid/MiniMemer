const emotes = require("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `you have to be chillin in voice` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `your not playing anything` }})

    const song = await client.player.skip(message.guild.id);

    message.channel.send({embed: {color: embedSuccess, description: `Skipped:\n\`${song.name}\`` }})

};

module.exports.config = {
    name: "skip",
    aliases: ["s"]
};
