const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `you must be in a voice channel to listen to music` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `your notplaying anything!! ` }})

    client.player.shuffle(message.guild.id);
    return message.channel.send({embed: {color: embedSuccess, description: `i shuffled the queue` }})
    
};

module.exports.config = {
    name: "shuffle",
    aliases: []
};
