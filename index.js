const { Client, GatewayIntentBits } = require('discord.js');
const Locales = require('./libs/Locales.js');
require('dotenv').config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.once('ready', () => {
    console.log(`${Locales['bot_init']} ${client.user.tag}`);
    module.exports = client;
    require("./init.js");
});

client.login(process.env.TOKEN);