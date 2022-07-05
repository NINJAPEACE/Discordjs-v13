module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type === "DM") return;

  if (message.content === "hi") message.reply("Halo juga!");

  let prefix = ["xy", "yx", "x!", "y!"];

  for (x of prefix) {
    if (message.content.toLowerCase().startsWith(x.toLowerCase())) prefix = message.content.substr(0, x.length);
  }

  if (!message.content.startsWith(prefix)) return null;

  let args = message.content.slice(prefix.length).trim().split(/\s+/g);
  let cmd = args.shift().toLowerCase();
  let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (commandFile) commandFile.run(client, message, args);
}
