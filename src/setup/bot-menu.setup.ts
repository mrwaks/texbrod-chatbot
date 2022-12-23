"use strict";

// Config
import config from "../config";

// Types
import { NextFunction, TMyBotContext } from "../types";

const setupBotMenu = async (ctx: TMyBotContext, next: NextFunction) => {
    await ctx.api.setMyCommands(config.botMenu);
    await next();
};

export default setupBotMenu;