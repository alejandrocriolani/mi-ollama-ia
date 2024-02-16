import { Llama2Content } from "./llama-response/llama2-content";

export interface OllamaChat {
    idChat?: number;
    role: string;
    content: string;
    parsedResponse?: Llama2Content;
}