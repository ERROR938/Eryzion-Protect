const { Client, EmbedBuilder, GatewayIntentBits, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

let lib = {};

// Fonction pour créer un embed
lib.CreateEmbed = (title, desc, guild, logo) => {
    return [
        new EmbedBuilder()
        .setColor("Purple")
        .setTitle(title)
        .setTimestamp()
        .setDescription(desc)
        .setFooter({ text: `© ${guild} 2024`, iconURL: logo })
    ];
};

// Fonction pour créer un bouton
lib.CreateButton = (label, id) => {
    const button = new ButtonBuilder()
    .setCustomId(id)
    .setLabel(label)
    .setStyle(ButtonStyle.Primary);
    return [new ActionRowBuilder().addComponents(button)];
};

module.exports = lib;
