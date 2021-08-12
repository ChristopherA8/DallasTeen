module.exports = {
  menuHandler(interaction, client) {
    if (interaction.customId == "region_select") {
      interaction.member.roles.cache.forEach((role) => {
        if (
          role.id !== "874736726613065739" && // Admin
          role.id !== "875047107663364149" && // Bus Driver
          role.id !== "874738208863297547" && // Bot ig ¯\_(ツ)_/¯
          role.name !== "@everyone"
        ) {
          interaction.member.roles
            .remove(role)
            .catch((err) => console.log(err));
        }
      });

      let east = interaction.guild.roles.cache.get("874720536524099624");
      let northeast = interaction.guild.roles.cache.get("875047727677988894");
      let west = interaction.guild.roles.cache.get("874720667222827099");
      let denton = interaction.guild.roles.cache.get("874720749917700137");
      let south = interaction.guild.roles.cache.get("875047733466103828");
      let central = interaction.guild.roles.cache.get("875047736666366042");

      for (const value of interaction.values) {
        switch (value) {
          case "east":
            interaction.member.roles.add(east);
            break;
          case "northeast":
            interaction.member.roles.add(northeast);
            break;
          case "west":
            interaction.member.roles.add(west);
            break;
          case "denton":
            interaction.member.roles.add(denton);
            break;
          case "south":
            interaction.member.roles.add(south);
            break;
          case "central":
            interaction.member.roles.add(central);
          default:
            break;
        }
      }

      interaction.reply({ content: "Changes Applied", ephemeral: true });
    }
  },
};
