const fetch = require('node-fetch');

module.exports = {
    execute(bot) {
        bot.command('apod',ctx => {
            let url = 'https://api.nasa.gov/planetary/apod?api_key=kCBGlT4hUgAV4FZ36MjdRaXQutXh9cg66KcMeEVp';
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    ctx.telegram.sendPhoto(ctx.chat.id, data.url, {
                        "caption": data.explanation.slice(0,1024)//caption should be double quotes
                    });
                })
                .catch((error) => console.log(error));
        })
    }   
}