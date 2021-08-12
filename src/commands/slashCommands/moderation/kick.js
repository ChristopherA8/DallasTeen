module.exports = {
  name: "kick",
  permissions: 2,
  async execute(interaction, client) {
    const { Permissions, MessageEmbed } = require("discord.js");
    let person = interaction.guild.members.cache.get(
      interaction.options.get("member").value
    );
    let reason = interaction.options.get("reason")?.value;

    if (person.id == interaction.member.id)
      return interaction.reply({ content: "baka", ephemeral: true });
    if (person.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
      return interaction.reply({
        content: "Don't kick an admin",
        ephemeral: true,
      });

    if (reason) {
      person.kick(reason);
      const kickEmbed = new MessageEmbed()
        .setTitle("Kicked")
        .addFields(
          { name: "User", value: `<@${person.id}>` },
          { name: "Reason", value: reason }
        );
      interaction.reply({ embeds: [kickEmbed] });
    } else {
      person.kick();
      interaction.reply(`Kicked <@${person.id}>`);
    }
  },
};
