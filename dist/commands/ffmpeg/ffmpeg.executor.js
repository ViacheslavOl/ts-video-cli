"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FfmpegExecutor = void 0;
const child_process_1 = require("child_process");
const command_executor_1 = require("../../core/executor/command.executor");
const file_service_1 = require("../../core/files/file.service");
const stream_handler_1 = require("../../core/handlers/stream.handler");
const prompt_service_1 = require("../../core/prompt/prompt.service");
const ffmpeg_builder_1 = require("./ffmpeg.builder");
class FfmpegExecutor extends command_executor_1.CommandExecutor {
    constructor(logger) {
        super(logger);
        this.fileService = new file_service_1.FileService();
        this.promptService = new prompt_service_1.PromptService();
    }
    async prompt() {
        const width = await this.promptService.input("Width", "number");
        const height = await this.promptService.input("Height", "number");
        const path = await this.promptService.input("Path to file", "input");
        const name = await this.promptService.input("Name", "input");
        return { width, height, path, name };
    }
    build({ width, height, path, name }) {
        const output = this.fileService.getFilePath(path, name, "mp4");
        const args = new ffmpeg_builder_1.FfmpegBuilder().input(path).setVideoSize(width, height).output(output);
        return { command: "ffmpeg", args, output };
    }
    spawn({ output, command: command, args }) {
        this.fileService.deleteFileIfExists(output);
        return (0, child_process_1.spawn)(command, args);
    }
    processStream(stream, logger) {
        const handler = new stream_handler_1.StreamHandler(logger);
        handler.processOutput(stream);
    }
}
exports.FfmpegExecutor = FfmpegExecutor;
