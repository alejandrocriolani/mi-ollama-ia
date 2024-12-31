export interface OllamaRequest {
    model: string;
    prompt: string;
    suffix: string;
    images?: string [];

    format: string;
    options?: {};
    system?: string;
    template?: string;
    stream: boolean;
    raw?: boolean;
    keep_alive?: number;
}