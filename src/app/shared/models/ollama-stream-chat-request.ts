import { OllamaChatRequest } from "./ollama-chat-request";
import { OllamaMessage } from "./ollama-message";

export class OllamaChatStreamRequest implements OllamaChatRequest {
    model: string;
    messages: any[];
    tool?: any;
    format: string;
    options?: any;
    stream: boolean;
    keep_alive?: number;

    constructor(model?: string, messages?: OllamaMessage[]) {
        this.model = model || "";
        this.messages = messages || [];
        this.format = "json";
        this.stream = true;
    }
}