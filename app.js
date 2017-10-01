var TelegramBot = require('node-telegram-bot-api');
var token = '423753643:AAHn7TI_8QzU6hlaKEzSppCy_SIzr0jA5n4';
//括號裡面的內容需要改為在第5步獲得的Token
var bot = new TelegramBot(token, {polling: true});
//使用Long Polling的方式與Telegram伺服器建立連線
 
//收到Start訊息時會觸發這段程式
bot.onText(/\/start/, function (msg) {
    var chatId = msg.chat.id; //用戶的ID
    var resp = 'This is a bot to turn decimal to hexcimal'; //括號裡面的為回應內容，可以隨意更改
    bot.sendMessage(chatId, resp); //發送訊息的function
});
 
//收到/cal開頭的訊息時會觸發這段程式
bot.onText(/\/hex (.+)/, function (msg, match) {
    var fromId = msg.from.id; //用戶的ID
    var resp = match[1].replace(/[^-()\d/*+.]/g, '');
    // match[1]的意思是 /cal 後面的所有內容
    resp = 'Hex: ' + Number(resp).toString(16);
    // eval是用作執行計算的functiona
    bot.sendMessage(fromId, resp); //發送訊息的function
});