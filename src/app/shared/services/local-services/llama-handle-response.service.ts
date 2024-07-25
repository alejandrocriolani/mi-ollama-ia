import { Injectable } from '@angular/core';
import { Llama2Content } from '../../models/llama-response/llama2-content';
import { OllamaChatResponse } from '../../models/ollama-chat-response';

@Injectable({
  providedIn: 'root'
})
export class LlamaHandleResponseService {

  constructor() { }

  parseResponse(content: string) : Llama2Content | undefined {
    let cleanResponse: string = content.replaceAll("@type", "type");
    cleanResponse = cleanResponse.replaceAll("\\n", " ");
    cleanResponse = cleanResponse.replaceAll("\\t", " ");
    cleanResponse = cleanResponse.replaceAll('\\"', '"');

    try {
      let parsedResponse: Llama2Content = JSON.parse(cleanResponse);

      if(parsedResponse.answer?.items) {
        parsedResponse.answer["list"] = parsedResponse.answer.items.split(",") || [];
      } 
      return parsedResponse;
    }
    catch (error) {
      console.error("Error parsing json.");
      console.error(error);
    }
    return undefined;
  }

  parseResponseStream(base64?: string) : OllamaChatResponse {
    if(base64) {
      let text: string = btoa(base64);
      return JSON.parse(text);
    }
    return {
      model: "",
      created_at: new Date(Date.now()),
      message: {
        role: "assistant",
        content: ""
      },
      done: false
    };
  }

  isResponseType(response: string, type: ResponseType) {
    return response.toUpperCase() == type.toUpperCase();
  }
}
