"use strict";

import { BotError } from "grammy";
import { TMyBot } from "../types";

const errorHandler = (bot: TMyBot, error: BotError) => {
    bot.catch(error => {
        
    });
};

export default errorHandler;