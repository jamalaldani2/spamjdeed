console.log("BOT ONLINE");
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
  //Toxic Codes
  });//Toxic Codes
bot.on('ready', () => {//Toxic Codes
    console.log(` !`);//Toxic Codes
          bot.user.setActivity("by n3k4a|Premiumbot|Toxic Codes  .",{type: 'WATCHING'});//Toxic Codes
  //Toxic Codes
  });//Toxic Codes

client.on('ready', () => {//Toxic Codes
    console.log(` !`);//Toxic Codes
          client.user.setActivity("by n3k4a|Premiumbot|Toxic Codes  .",{type: 'WATCHING'});//Toxic Codes
  //Toxic Codes
  });//Toxic Codes





const prefix = "1";

client.on("ready", () => {
let channel = client.channels.get("573192829472604177")
setInterval(function() {
channel.send(`I NEED CREDITS NOW`);
}, 999)
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


  if (command === "say") { /// اكتب البرفيكس ثم الامر
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }


});

bot.on("ready", () => {
let channel = bot.channels.get("573192829472604177")
setInterval(function() {
channel.send(`I NEED CREDITS NOW`);
}, 999)
})

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


  if (command === "say") { /// اكتب البرفيكس ثم الامر
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }


});



client.login(process.env.BOT_TOKEN);
bot.login(process.env.BOT_TOKEN2);
client.login(process.env.BOT_TOKEN3);
