module.exports = {
  name: "unlock",
  permissions: 2,
  execute(msg) {
    msg.channel.updateOverwrite(msg.guild.roles.everyone, {
      SEND_MESSAGES: null,
    });
    msg.reply("Channel unlocked");
  },
};
