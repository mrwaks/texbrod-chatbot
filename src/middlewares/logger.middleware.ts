"use strict";

import { NextFunction, TMyBotContext } from "../types";

const loggerMiddleware = (ctx: TMyBotContext, next: NextFunction) => {
    const locales = ctx.from?.language_code;
    const userId = ctx.from?.id;
    const command = ctx.message?.text;
    const timestamp = new Date().toLocaleString(`${locales}-${locales.toUpperCase()}`);

    const log = `\x1b[33m${timestamp}\x1b[0m - \x1b[35mUserId: ${userId}\x1b[0m - \x1b[36mCommand: ${command}\x1b[0m`;

    console.log(log);
    next();
};

export default loggerMiddleware;