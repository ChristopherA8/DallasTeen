module.exports = {
  event(client) {
    client.on("guildMemberAdd", (member) => {
      const { MessageEmbed } = require("discord.js");
      const embed = new MessageEmbed()
        .setTitle(
          `${
            member.user.tag
          } Joined\nat ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        )
        .setThumbnail(
          `${member.user.displayAvatarURL({ dynamic: true, size: 64 })}`
        );

      client.guilds.cache
        .get("874720431540670525")
        ?.channels.cache.get("875242415345258496")
        ?.send({
          embeds: [embed],
        });
    });
  },
};
