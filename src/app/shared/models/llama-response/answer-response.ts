import { LlamaResponseType } from "./response-type";

export interface AnswerResponse extends LlamaResponseType {
    explanation?: string;
    items?: string;
    list: string [];
    text ?: string;
}