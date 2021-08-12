module.exports = {
  name: "unlock",
  permissions: 2,
  execute(interaction, client) {
    interaction.channel.permissionOverwrites.edit(
      interaction.guild.roles.everyone,
      {
        SEND_MESSAGES: true,
      }
    );
    interaction.reply({ content: "Channel Unlocked" });
  },
};
