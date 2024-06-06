/*
how to get the secret taken fro creating a bot?
-> open telegram and search for Botfather
-> to read the instruction type /start and press enter
-> to create a new bot type /newbot and press enter
-> it will ask for the bot name so give bot name
-> now, you have to choose the username of the bot which must be ending with bot.
*/

const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new Telegraf('7186792591:AAFzNXDOGyxmI1SMAf8WcB27m2zTUipX35g');

// Define a simple command handler
bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

// Launch the bot
bot.launch().then(() => {
    console.log('Bot started');
}).catch((error) => {
    console.error('Failed to launch bot:', error);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
