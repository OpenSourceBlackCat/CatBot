const Discord = require("discord.js");
const CatBotClient = new Discord.Client({
    intents: [Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent, Discord.GatewayIntentBits.Guilds]
});
var Owner;
CatBotClient.on("ready", async()=>{
    const Guild = await CatBotClient.guilds.fetch(process.env.GUILD);
    Owner = await Guild.members.fetch(process.env.OWNER);
    console.log("CatBot Is Running Fine!");
});
CatBotClient.on("messageCreate", async(msg)=>{
    if(!msg.author.bot){
        if(Owner.voice.channel!=null && msg.channel.id==Owner.voice.channel.id){
            msg.channel.send("Meow");
        }
    } 
});
module.exports = CatBotClient;