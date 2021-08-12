module.exports = {
  async slashHandler(interaction, client) {
    const { Permissions } = require("discord.js");

    if (!client.slash.has(interaction.commandName)) return;
    const slash = client.slash.get(interaction.commandName);

    try {
      /*
       * 1. @everyone
       * 2. Admin
       */
      switch (slash.permissions) {
        case 1:
          slash.execute(interaction, client);
          break;
        case 2:
          if (
            interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
          ) {
            slash.execute(interaction, client);
            break;
          } else {
            interaction.reply({
              content: "Missing permissions",
              ephemeral: true,
            });
          }
          return;
        default:
          slash.execute(interaction, client);
          break;
      }
    } catch (error) {
      console.error(error);
      await interaction.channel.send(`${error}\n||<@279032930926592000>||`);
    }
  },
};
