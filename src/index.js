const { Client, Intents, Interaction } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

const fs = require("fs");

const { token, prefix } = require("../config.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`ur mom`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/sykkuno",
  });

  // Run setup
  const files = fs
    .readdirSync(`./src/setup`)
    .filter((file) => file.endsWith(".js"));
  for (const file of files) {
    const { setup } = require(`../src/setup/${file}`);
    if (!setup) return;
    setup(client);
  }

  // Run events
  const eventfiles = fs
    .readdirSync(`./src/events`)
    .filter((file) => file.endsWith(".js"));
  for (const file of eventfiles) {
    const { event } = require(`../src/events/${file}`);
    if (!event) return;
    event(client);
  }
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;

  // Message Listeners
  const files = fs
    .readdirSync(`./src/listeners`)
    .filter((file) => file.endsWith(".js"));
  for (const file of files) {
    const { listen } = require(`../src/listeners/${file}`);
    if (!listen) return;
    listen(msg);
  }

  const { commandHandler } = require("./handlers/commands.js");
  commandHandler(msg, prefix);
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isCommand()) {
    const { slashHandler } = require("./handlers/slash.js");
    slashHandler(interaction, client);
  }

  if (interaction.isSelectMenu()) {
    const { menuHandler } = require("./handlers/menus.js");
    menuHandler(interaction, client);
  }

  if (interaction.isButton()) {
    const { buttonHandler } = require("./handlers/buttons.js");
    buttonHandler(interaction, client);
  }
});

client.login(token);
