//================== IMPORTS ==================//

import { Api, Bot, Context, NextFunction, RawApi, SessionFlavor } from "grammy";
import { I18nFlavor } from "@grammyjs/i18n";
import { Conversation, ConversationFlavor } from "@grammyjs/conversations";
import { Message } from "grammy/out/types.node";

export {
    Bot,
    Context,
    NextFunction,
    I18nFlavor,
    SessionFlavor,
};

//================== INTERFACES ==================//

export interface IMyBotMethod {
    getId: () => number;
};

export interface IBotCommand {
    name: string;
    run: (ctx: TMyBotContext, next?: NextFunction) => Promise<void>;
};

export interface IBotConversation {
    name: string;
    run: (conversation: TMyBotConversation, ctx: TMyBotContext) => Promise <Message.TextMessage>;
};

export interface ISessionBotData {};

//================== TYPES ==================//

export type TMyBot = Bot<TMyBotContext, Api<RawApi>>;

export type TMyBotContext = 
Context & 
I18nFlavor & 
ConversationFlavor & 
SessionFlavor<ISessionBotData> & 
IMyBotMethod;

export type TMyBotConversation = Conversation<TMyBotContext>;