import { OllamaMessage } from "./ollama-message";

export interface OllamaChatRequest {
    model: string;
    messages: OllamaMessage [];
    tool?: any;
    format: string;
    options?: any;
    stream: boolean;
    keep_alive?: number;
}
