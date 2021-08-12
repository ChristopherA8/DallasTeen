module.exports = {
  name: "welcome",
  permissions: 2,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");

    const embed = new MessageEmbed()
      .setTitle("Welcome To Dallas Teens")
      .setDescription(
        "This server is for coordinating activities and events for all Dallas Teens. Select your region below so we know where you are."
      )
      .setColor("#1C4A82");

    msg.channel.send({
      embeds: [embed],
      components: [
        {
          type: 1,
          components: [
            {
              type: 3,
              custom_id: "region_select",
              options: [
                {
                  label: "East",
                  value: "east",
                  description: "East region",
                },
                {
                  label: "Northeast",
                  value: "northeast",
                  description: "Northeast region",
                },
                {
                  label: "West",
                  value: "west",
                  description: "West region",
                },
                {
                  label: "Denton",
                  value: "denton",
                  description: "Denton region",
                },
                {
                  label: "South",
                  value: "south",
                  description: "South region",
                },
                {
                  label: "Central",
                  value: "central",
                  description: "Central region",
                },
              ],
              placeholder: "Select your region",
              min_values: 1,
              max_values: 1,
            },
          ],
        },
      ],
    });
  },
};
