module.exports = {
  name: "lock",
  permissions: 2,
  execute(interaction, client) {
    interaction.channel.permissionOverwrites.edit(
      interaction.guild.roles.everyone,
      {
        SEND_MESSAGES: false,
      }
    );
    interaction.reply({ content: "Channel Locked" });
  },
};
