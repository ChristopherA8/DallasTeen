module.exports = {
  async commandHandler(msg, prefix) {
    const { Permissions } = require("discord.js");

    if (msg.content.startsWith(prefix)) {
      const args = msg.content.slice(prefix.length).split(/ +/);
      const commandName = args.shift().toLowerCase();
      if (!msg.client.commands.has(commandName)) return;
      const command = msg.client.commands.get(commandName);

      try {
        /*
         * 1. @everyone
         * 2. Admin
         */
        switch (command.permissions) {
          case 1:
            command.execute(msg, args);
            break;
          case 2:
            if (msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
              command.execute(msg, args);
              break;
            }
            return;
          default:
            command.execute(msg, args);
            break;
        }
      } catch (error) {
        console.error(error);
        await msg.channel.send(
          `**Crashlog:** ${error}\n||<@279032930926592000>||`
        );
      }
    }
  },
};
