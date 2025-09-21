"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandExecutor = void 0;
class CommandExecutor {
    constructor(logger) {
        this.logger = logger;
    }
    async execute() {
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.processStream(stream, this.logger);
    }
}
exports.CommandExecutor = CommandExecutor;
