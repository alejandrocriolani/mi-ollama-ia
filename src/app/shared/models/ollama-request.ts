export interface OllamaRequest {
    model: string;
    prompt: string;
    format?: string;
    stream?: boolean
}