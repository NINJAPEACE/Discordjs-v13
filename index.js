const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("ready", () => {
  console.log(`${client.user.tag} Ready!`);
});

client.on("messageCreate", async message => {
   if(message.author.bot || message.channel.type === "DM") return;

   if(message.content === "hi") message.reply("Halo juga!");
});

client.login("Your Bot Token");
