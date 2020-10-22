const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `get in a voice chat` }})

    const queue = client.player.getQueue(message.guild.id);

    if(!queue) return message.channel.send({embed: {color: embedFail, description: `nothing is playing` }})

    let q = queue.songs.map((song, i) => {
        return `${i === 0 ? 'Current' : `${i+1}`}- \`${song.name} : ${song.author}\``
    }).join('\n');  
       message.channel.send({embed: {color: embedSuccess, description: `${q}` }})
}

  
module.exports.config = {
    name: "queue",
    aliases: []
};
