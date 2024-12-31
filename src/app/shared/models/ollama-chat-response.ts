import { OllamaMessage } from "./ollama-message";

export interface OllamaChatResponse {
    model: string;
    created_at: Date;
    message: OllamaMessage;
    done: boolean;
    total_duration?: number;
    load_duration?: number;
    propmt_eval_count?: number;
    prompt_eval_duration?: number;
    eval_count?: number;
    eval_duration?: number;
}