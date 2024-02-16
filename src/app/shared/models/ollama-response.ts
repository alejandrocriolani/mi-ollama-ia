export interface OllamaResponse{
    model: string;
    created_at: Date;
    response: string;
    done: boolean;
}