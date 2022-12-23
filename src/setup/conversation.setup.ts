"use strict";

import { createConversation } from "../middlewares";
import { IBotConversation, NextFunction, TMyBot, TMyBotContext } from "../types";

const setupConversation = (bot: TMyBot, conversations: IBotConversation[]) => {
    conversations.forEach(conversation => {
        bot.use(createConversation(conversation.run, conversation.name));
    });
};

export default setupConversation;