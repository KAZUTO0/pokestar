// import {} from 'dotenv/config'
// const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
require ('dotenv').config();
// const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);