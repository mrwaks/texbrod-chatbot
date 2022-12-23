"use strict";

import { IBotCommand, TMyBot } from "../types";

const setupCommand = (bot: TMyBot, commands: IBotCommand[]) => {
    commands.forEach(command => bot.command(command.name, command.run));
};

export default setupCommand;