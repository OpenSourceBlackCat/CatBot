require("dotenv").config();
const CatBotClient = require("./app/CatBot.js");
CatBotClient.login(process.env.TOKEN);