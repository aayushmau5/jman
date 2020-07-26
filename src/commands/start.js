module.exports = {
    execute(bot) {
        bot.start(ctx => {
            ctx.reply("JODC bot started.");
        })
    }
}