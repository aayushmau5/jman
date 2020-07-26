module.exports = {
    execute(bot) {
        bot.command('offtopic',ctx => {
            if(!ctx.message.reply_to_message) return;
            ctx.telegram.forwardMessage('-1001366789762', ctx.chat.id, ctx.message.reply_to_message.message_id);
            // console.log(ctx.message);
            //offtopic -1001366789762
            //main -1001380372635
        })
    }
}