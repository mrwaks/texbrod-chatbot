"use strict";

// Types
import { IBotCommand } from "../types";

const orderCommand: IBotCommand = {
    name: "order",
    run: async (ctx) => {
        await ctx.conversation.enter("order");
    },
};

export default orderCommand;