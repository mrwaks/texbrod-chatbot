"use strict";

// Modules
import { sampleOrder } from "../modules";

// Types
import { IBotConversation, TMyBotContext, TMyBotConversation } from "../types";

const orderTypes = ["sample", "dao"];

const orderConversation: IBotConversation = {
    name: "order",
    run: async (conversation: TMyBotConversation, ctx: TMyBotContext) => {
        await ctx.reply(ctx.t("questionOrderType"));
        ctx = await conversation.wait();
        let orderType = ctx.message.text.toLowerCase();
        if (orderType === "exit") return await ctx.reply(ctx.t("leaveConversation"));

        while (!orderTypes.includes(orderType)) {
            await ctx.reply(ctx.t("repeatQuestionOrderType"));
            ctx = await conversation.wait();
            orderType = ctx.message.text.toLowerCase();
            if (orderType === "exit") return await ctx.reply(ctx.t("leaveConversation"));
        }

        if (orderType === "sample") {
            return await sampleOrder(conversation, ctx);
        }
    },
};

export default orderConversation;