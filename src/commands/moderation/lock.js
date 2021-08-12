module.exports = {
  name: "lock",
  permissions: 2,
  execute(msg) {
    msg.channel.permissionOverwrites.edit(msg.guild.roles.everyone, {
      SEND_MESSAGES: false,
    });
    msg.reply("Channel locked");
  },
};
