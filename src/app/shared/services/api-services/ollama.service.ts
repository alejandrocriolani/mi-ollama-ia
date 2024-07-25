import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OllamaRequest } from '../../models/ollama-request';
import { OllamaResponse } from '../../models/ollama-response';
import { Llama2Data } from '../../models/llama-2-data';
import { OllamaChatResponse } from '../../models/ollama-chat-response';
import { OllamaChat } from '../../models/ollama-chat';
import { OllamaChatRequest } from '../../models/ollama-chat-request';
import { environment } from '../../../../environments/environment.development';
import { Model, OllamaModel } from '../../models/ollama-model';

@Injectable({
  providedIn: 'root'
})
export class OllamaService {

  constructor(private http: HttpClient) { }

  getLocalModels() : Observable<Model> {
    let url: string = this.getOllamaApiUrl() + "tags";
    return this.http.get<Model>(url);
  }

  askOllama(data: Llama2Data) : Observable<OllamaResponse> {
    let req : OllamaRequest = {
      model: data.tipo,
      prompt: data.prompt,
      format: 'json',
      stream: false
    }

    let url: string = this.getOllamaApiUrl() + "generate";

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

    let url: string = this.getOllamaApiUrl() + "chat"


    return this.http.post<OllamaChatResponse>(url, req, {observe: 'body', responseType: "json"});
  }

  chatOllamaStreamResult(data: Llama2Data, messages?: OllamaChat []): Observable<HttpEvent<string>> {
    let url: string = this.getOllamaApiUrl() + "chat";
    messages = this.makeMessages(data, messages);
    let req = this.getRequest(data, messages, true)    

    return this.http.post<string>(url, req, {observe: "events", responseType: 'json', reportProgress: true});
  }

  getOllamaApiUrl(): string {
    return environment.baseUrl + "api/";
  }

  private makeMessages(data: Llama2Data, messages ?: OllamaChat []) : OllamaChat [] {
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
    return messages;
  }

  private getRequest(data: Llama2Data, messages: OllamaChat[], stream?: boolean): OllamaChatRequest {
    let req : OllamaChatRequest = {
      model: data.tipo,
      messages: messages,
      format: 'json',
      stream: stream || false
    }

    return req;
  }

}
