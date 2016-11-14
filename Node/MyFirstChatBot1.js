var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);
bot.dialog('/', [
    function (session) {
        builder.Prompts.text(session, 'Dei Baadu! What is your name?');
    },
    function (session, results) {
        session.send('Hello %s!', results.response);
    }
]);