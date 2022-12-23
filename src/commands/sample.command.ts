"use strict";

// Types
import { IBotCommand } from "../types";

// Dummy Data
const references = ["#tex01", "#text02", "#tex03", "#text04", "#tex05", "#text06"];
const colors = ["red", "black", "blue", "green", "pink", "yellow"];

const sampleCommand: IBotCommand = {
    name: "sample",
    run: async (ctx, next) => {
        const match = ctx.match as string;
        const args = match.split("\n").filter(value => value !== "" && value.startsWith("#"));
        const orders = args.map(arg => arg.split(" "));

        let message: string;

        for (let order of orders) {
            const reference = order[0];
            const color = order[1];
            const quantity = order[2];

            if (!references.includes(reference)) {
                await ctx.reply(`Reference: ${reference} doesn't exists`);
                break;
            }

            if (!colors.includes(color)) {
                await ctx.reply(`Color: ${color} or Reference: ${reference}, doesn't exists`);
                break;
            }

            if (!/^\d+([\.\,]5)*$/.test(quantity)) {
                await ctx.reply(`Quantity: invalid format of Reference ${reference}`);
                break;
            }
        }
    },
};

export default sampleCommand;