const { Extra } = require("telegraf");

module.exports = {
    execute(bot) {
        bot.command('main',ctx => {
            if(!ctx.message.reply_to_message) return;
            ctx.telegram.forwardMessage('-1001380372635', ctx.chat.id, ctx.message.reply_to_message.message_id);
            //  console.log(ctx.message);
        })
    }
}