"use strict";

// Config
import config from "../config";

// Classes
import { Bot } from "grammy";

// Types
import { TMyBotContext } from "../types";

const bot = new Bot<TMyBotContext>(config.apiKey.telegram);

export default bot;