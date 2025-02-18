const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.login("MTM0MTA2NjM1NDUzMDE5MzQ2OA.GUn6Yu.znxl9bBty7pZ6NvR3-wYGsu82WaR89M1hUsRtU");