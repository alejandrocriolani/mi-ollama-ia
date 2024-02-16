import { AnswerResponse } from "./answer-response";
import { LlamaResponseType } from "./response-type";

export interface QuestionResponse extends LlamaResponseType {
    question?: string;
    answer?: AnswerResponse;
}