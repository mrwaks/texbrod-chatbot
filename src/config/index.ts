"use strict";

// Npm Modules
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const config = {
    apiKey: {
        telegram: process.env.TELEGRAM_HTTP_API_KEY,
    },
    path: {
        root: process.cwd(),
    },
    botMenu: [
        {
            command: "start",
            description: "Start the bot",
        },
        {
            command: "order",
            description: "Order a 'sample' or 'D.A.O'",
        },
    ],
};

export default config;