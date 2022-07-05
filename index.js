const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`${client.user.tag} Ready!`);
});

client.on("messageCreate", message => require("./events/messageCreate.js")(client, message));

client.login(process.env.token);
