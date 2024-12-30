const { Client, GatewayIntentBits } = require('discord.js');
const dialogflow = require('../nlu/dialogflow');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Handle incoming messages
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  
  const userMessage = message.content;
  const response = await dialogflow.getResponse(userMessage); // Get response from Dialogflow
  
  message.reply(response);
});

client.login(process.env.DISCORD_BOT_TOKEN);
