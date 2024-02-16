import { LlamaResponseType } from "./response-type";

export interface ChatResponse extends LlamaResponseType{
    text: string;
}