import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OllamaRequest } from '../../models/ollama-request';
import { OllamaResponse } from '../../models/ollama-response';
import { Llama2Data } from '../../models/llama-2-data';
import { OllamaChatResponse } from '../../models/ollama-chat-response';
import { OllamaChat } from '../../models/ollama-chat';
import { OllamaChatRequest } from '../../models/ollama-chat-request';

@Injectable({
  providedIn: 'root'
})
export class OllamaService {

  constructor(private http: HttpClient) { }

  askOllama(data: Llama2Data) : Observable<OllamaResponse> {
    let req : OllamaRequest = {
      model: data.tipo,
      prompt: data.prompt,
      format: 'json',
      stream: false
    }

    let url: string = "http://127.0.0.1:11434/api/generate"

    return this.http.post<OllamaResponse>(url, req, {observe: 'body', responseType: "json"});
  }

  chatOllama(data: Llama2Data, messages ?: OllamaChat []) : Observable<OllamaChatResponse>{
    if(messages != null) {
      messages.push(
        {
          role: "user",
          content: data.prompt
        }
      )
    } else {
      messages = [{
        role: "user",
        content: data.prompt
      }]
    }
    
    let req : OllamaChatRequest = {
      model: data.tipo,
      messages: messages,
      format: 'json',
      stream: false
    }

    let url: string = "http://127.0.0.1:11434/api/chat"

    console.log(url, req);

    return this.http.post<OllamaChatResponse>(url, req, {observe: 'body', responseType: "json"});
  }

}
