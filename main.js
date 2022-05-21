const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Connected to the Database!");
    })
    .catch((err) => {
        console.log(err);
    })

client.once('ready', ()=> {
    console.log('Tokeneer is online!');
});

console.log('Token', process.env.Discord_TOKENEER);

client.login(process.env.Discord_TOKENEER);
