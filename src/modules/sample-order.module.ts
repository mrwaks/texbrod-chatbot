"use strict";

// Types
import { TMyBotContext, TMyBotConversation } from "../types";

// Dummy Data
const references = ["#tex01", "#text02", "#tex03", "#text04", "#tex05", "#text06"];
const colors = ["red", "black", "blue", "green", "pink", "yellow"];

const sampleOrder = async (conversation: TMyBotConversation, ctx: TMyBotContext) => {
    await ctx.reply(ctx.t("questionSampleReference"));
    ctx = await conversation.wait();
    let reference = ctx.message.text.toLowerCase();
    if (reference === "exit") return ctx.reply(ctx.t("leaveConversation"));

    while (!references.includes(reference)) {
        await ctx.reply(ctx.t("repeatQuestionSampleReference"));
        ctx = await conversation.wait();
        reference = ctx.message.text.toLowerCase();
        if (reference === "exit") return;
    }
    
    await ctx.reply(ctx.t("questionSampleColor", {
        colors: colors.map(color => color.replace(/^/, "  - ")).join("\n"),
    }));
    ctx = await conversation.wait();
    let color = ctx.message.text.toLowerCase();
    if (color === "exit") return;


    while (!colors.includes(color)) {
        await ctx.reply(ctx.t("repeatQuestionSampleColor", {
            colors: colors.map(color => color.replace(/^/, "  - ")).join("\n"),
        }));
        ctx = await conversation.wait();
        color = ctx.message.text.toLowerCase();
        if (color === "exit") return;
    }

    await ctx.reply(ctx.t("questionSampleQuantity"));
    ctx = await conversation.wait();
    let quantity = ctx.message.text;
    if (quantity === "exit") return;

    while (!/^\d+([\.\,]5)*$/.test(quantity)) {
        await ctx.reply(ctx.t("repeatQuestionSampleQuantity"));
        ctx = await conversation.wait();
        quantity = ctx.message.text;
        if (quantity === "exit") return;
    }

    return await ctx.reply(ctx.t("AnswerSampleOrder", { reference, color, quantity }));
};

export default sampleOrder;