const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `you have to be in a voice chat...` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `nothing is being played` }})
    if(!args[0]) return message.channel.send({embed: {color: embedFail, description: `please enter an actual number` }})
    if(isNaN(args[0])) return message.channel.send({embed: {color: embedFail, description: `please enter an actual number` }})
   if (args > 10000) return message.channel.send({embed: {color: embedFail, description: `the number can only be between \`9999\` - \`20\` \n \`\`9999\`\` is insane bass `}})
  if (args < 20) return message.channel.send({embed: {color: embedFail, description: `the number can only be between \`9999\` - \`20\` \n \`\`9999\`\` is insane bass` }})
  ,
  

    client.player.setVolume(message.guild.id, parseInt(args.join(" ")));

    message.channel.send({embed: {color: embedSuccess, description: `Music Volume set to \`${args.join(" ")}\` enjoy it gamer` }})


};

module.exports.config = {
    name: "vol",
    aliases: ["volume1"]
};
