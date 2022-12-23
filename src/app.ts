"use strict";

// Setup
import { bot, initial, setupBotMenu, setupCommand, setupConversation } from "./setup";

// Middlewares
import { i18nMiddleware, conservationsMiddleware, loggerMiddleware, session } from "./middlewares";

// Conversations
import conversations from "./conversations";

// Commands
import commands from "./commands";

// Handlers
import { processOnEventHandler } from "./handlers";

bot
    .use(session({ initial }))
    // .use(loggerMiddleware)
    .use(setupBotMenu)
    .use(i18nMiddleware)
    .use(conservationsMiddleware());

setupConversation(bot, conversations);
setupCommand(bot, commands);

bot.catch(error => {
    console.log(error);
});

bot.start();

processOnEventHandler(bot, process);