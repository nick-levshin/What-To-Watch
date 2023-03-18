const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramApi(process.env.API_TOKEN, { polling: true });

const start = async () => {
  bot.setMyCommands([
    { command: '/start', description: 'Начать работу с ботом' },
    { command: '/about', description: 'Информация об авторе' },
  ]);
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.first_name;
    bot.sendMessage(chatId, `Привет, ${userName}!`);
  });
};

start();
