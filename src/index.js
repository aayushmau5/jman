const fs = require('fs');
const Telegraf = require('telegraf');
const express = require('express');
require('dotenv').config();
const expressApp = express();

const port = process.env.PORT || 3000

expressApp.get('/', (req, res) => {
  res.send('Hello World!')
})
expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const bot = new Telegraf(process.env.BOT_TOKEN);

const Commands = fs.readdirSync('./src/commands');
for(const file of Commands) {
    const command = require(`./commands/${file}`);
    command.execute(bot);
}

bot.startPolling()

bot.launch();