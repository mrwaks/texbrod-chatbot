"use strict";

import { TMyBot } from "../types";

const processOnEventHandler = (bot: TMyBot, process: NodeJS.Process) => {
    process.on("unhandledRejection", error => {
        throw error;
    });
    
    process.on("uncaughtException", error => {
        console.log(`Caught: ${error}`);
    });
    
    process.on("SIGINT", () => bot.stop());
    
    process.on("SIGTERM", () => bot.stop());
};

export default processOnEventHandler;