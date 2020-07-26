const fetch = require('node-fetch');

module.exports = {
    execute(bot) {
        bot.command('insult',ctx => {
            let url = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
            fetch(url)
                .then(resp => resp.json())
                .then(data => ctx.reply(data.insult));
        })
    }
}