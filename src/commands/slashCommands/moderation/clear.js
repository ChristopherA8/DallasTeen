module.exports = {
  name: "clear",
  permissions: 2,
  execute(interaction, client) {
    let amount = interaction.options.get("amount").value;

    if (!(amount >= 1 && amount <= 100))
      return interaction.reply({
        content: "Enter amount from 1-100",
        ephemeral: true,
      });

    interaction.channel.messages
      .fetch()
      .then(() => {
        interaction.channel
          .bulkDelete(amount == 100 ? amount : amount + 1)
          .catch((err) => {
            interaction.reply({ content: `${err}`, ephemeral: true });
            return;
          });
        interaction
          .reply({ content: "Messages Deleted", fetchReply: true })
          .then((reply) => {
            setTimeout(() => {
              reply.delete();
            }, 1500);
          });
      })
      .catch((err) => {
        interaction.reply({
          content: "Error fetching messages",
          ephemeral: true,
        });
      });
  },
};
