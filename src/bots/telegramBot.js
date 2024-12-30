const { Telegraf } = require('telegraf');
const dialogflow = require('../nlu/dialogflow'); // For dialogflow integration

// Get bot token from the environment variable
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Handle '/start' command
bot.start((ctx) => {
  ctx.reply('Hi! I am your customer support bot. How can I help you today?');
});

// Handle incoming messages
bot.on('text', async (ctx) => {
  const userMessage = ctx.message.text;
  const response = await dialogflow.getResponse(userMessage); // Get response from Dialogflow
  ctx.reply(response);
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
