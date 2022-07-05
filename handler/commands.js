const fs = require("fs");
const Discord = require("discord.js");

module.exports = client => {
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdirSync("./commands").forEach(category => {
    if(category.endsWith(".js")) return;
    
    const commands = fs.readdirSync(`./commands/${category}`).filter(file => file.endsWith(".js"));
    
    for(file of commands) {
      let pull = require(`../commands/${category}/${file}`);
      
      client.commands.set(pull.config.name, pull);
      pull.config.aliases.forEach(aliases => {
        client.aliases.set(aliases, pull.config.name);
      })
    }
  })
}
