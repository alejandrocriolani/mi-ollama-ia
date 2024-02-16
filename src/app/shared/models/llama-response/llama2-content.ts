import { ChatResponse } from "./chat-response";
import { MatrixResponse } from "./matrix-response";
import { MessageResponse } from "./message-response";
import { QuestionResponse } from "./question-response";
import { LlamaResponseType } from "./response-type";
import { ResultResponse } from "./result-response";

export interface Llama2Content extends ChatResponse, ResultResponse, LlamaResponseType, MatrixResponse, MessageResponse, QuestionResponse {
    //type: string;
    //question?: string;
    message?: string;
    name?: string;
    //text?: string;
    date?: Date,
    speaker?: string;
    /* answer?: {
        type?: string;
        explanation?: string;
        items?: string;
        list: string [];
        text ?: string;
    }, */
    acceptedAnswer?: {
        type?: string;
        text?: string;
    },
    answers?: [{
        type?: string;
        text?: string;
        isAnswer?: boolean;
    }],
/*     dimension?: number;
    elements: number[] []; */
}