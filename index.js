const { Client, GatewayIntentBits } = require('discord.js');

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

client.login("MTM0MTQ2NzM4NDc4Mjc4MjQ3Ng.GmV32g.o0mx6ljjJMiBtUUhYV9ryEBL79xk2klActuDN0");