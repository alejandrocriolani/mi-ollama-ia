export interface OllamaMessage {
    role: string;
    content: string;
    images?: string [];
    tool_call?: any;
}