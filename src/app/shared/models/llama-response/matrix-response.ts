import { LlamaResponseType } from "./response-type";

export interface MatrixResponse extends LlamaResponseType {
    dimension?: number;
    elements: number[] [];
}