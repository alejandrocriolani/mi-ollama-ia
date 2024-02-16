import { LlamaResponseType } from "./response-type";

export interface MessageResponse extends LlamaResponseType {
    text: string;
}