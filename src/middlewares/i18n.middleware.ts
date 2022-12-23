"use strict";

// Core Modules
import { join } from "path";

// Classes
import { I18n } from "@grammyjs/i18n";

// Types
import { TMyBotContext } from "../types";

// Config
import config from "../config";

const i18nConfig = {
    defaultLocale: "en",
    directory: join(config.path.root, "src", "locales"),
};

const i18nMiddleware = new I18n<TMyBotContext>(i18nConfig);

export default i18nMiddleware;