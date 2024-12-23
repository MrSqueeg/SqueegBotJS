const Transcriber = require("discord-speech-to-text");
const transcriber = new Transcriber("DK7OV5FGZKQ64KCCIS7R4JUN7JWTEWLG");

let channel = interaction.member.guild.channels.cache.get(interaction.member.voice.channel.id);
const connection = joinVoiceChannel({
  channelId: channel.id,
  guildId: channel.guild.id,
  adapterCreator: channel.guild.voiceAdapterCreator,
  selfDeaf: false,
  selfMute: false
});
connection.receiver.speaking.on("start", (userId) => {
  transcriber.listen(connection.receiver, userId, client.users.cache.get(userId)).then((data) => {
    if (!data.transcript.text) return;
    let text = data.transcript.text;
    let user = data.user;
  });
});