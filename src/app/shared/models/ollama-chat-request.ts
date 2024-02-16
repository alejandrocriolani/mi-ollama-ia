import { OllamaChat } from "./ollama-chat";

export interface OllamaChatRequest {
    model: string;
    messages: OllamaChat [];
    format?: string;
    stream: boolean;
}