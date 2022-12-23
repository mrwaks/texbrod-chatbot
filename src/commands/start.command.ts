"use strict";

// Types
import { IBotCommand } from "../types";

const startCommand: IBotCommand = {
    name: "start",
    run: async (ctx) => {
        await ctx.reply(ctx.t("start"));
    },
};

export default startCommand;