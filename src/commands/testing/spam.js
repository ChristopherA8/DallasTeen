module.exports = {
  name: "spam",
  permissions: 2,
  execute(msg) {
    for (let i = 0; i < 10; i++) {
      msg.channel.send("hi");
    }
  },
};
