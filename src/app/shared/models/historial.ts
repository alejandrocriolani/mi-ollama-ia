import { OllamaMessage } from "./ollama-message";
import { OllamaResponse } from "./ollama-response";

export interface Historial {
    id: number;
    prompt: string;
    response?: OllamaResponse;
    chatMessage?: OllamaMessage;
}