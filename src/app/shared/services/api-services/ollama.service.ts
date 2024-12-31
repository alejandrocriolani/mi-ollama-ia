import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../../models/ollama-model';
import { environment } from '../../../../environments/environment.development';
import { OllamaBasicRequest } from '../../models/ollama-basic-request';
import { OllamaResponse } from '../../models/ollama-response';
import { OllamaStreamedRequest } from '../../models/ollama-streamed-request';
import { OllamaBasicChatRequest } from '../../models/ollama-basic-chat-request';
import { OllamaChatStreamRequest } from '../../models/ollama-stream-chat-request';
import { OllamaChatResponse } from '../../models/ollama-chat-response';

@Injectable({
  providedIn: 'root'
})
export class OllamaService {

  constructor(private http: HttpClient) { }

  getLocalModels() : Observable<Model> {
    let url: string = this.getOllamaApiUrl() + "tags";
    return this.http.get<Model>(url);
  }

  generateNoStreamedResponse(data: OllamaBasicRequest) : Observable<OllamaResponse> {
    let url: string = this.getOllamaApiUrl() + "generate";
    return this.http.post<OllamaResponse>(url, data);
  }

  generateStreamedResponse(data: OllamaStreamedRequest) : Observable<OllamaResponse> {
    let url: string = this.getOllamaApiUrl() + "generate";
    let request: Request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
    }});
      
    return new Observable(observer => {
      fetch(request).then(response => {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        const read = () => {
          reader?.read().then(({ done, value }) => {
            if (done) {
              observer.complete();
              return;
            }

            const chunk = decoder.decode(value, { stream: true });
            try {
              const json = JSON.parse(chunk); // Asume que el chunk es un JSON válido
              observer.next(json);
            } catch (error) {
              observer.error('Error parsing JSON chunk: ' + error);
            }

            read();
          });
        };

        read();
        })
      .catch(error => {
        observer.error('Fetch error: ' + error);
      });
    });
  }

  chatNoStreamedResponse(data: OllamaBasicChatRequest) : Observable<OllamaChatResponse> {
    let url: string = this.getOllamaApiUrl() + "chat";
    return this.http.post<OllamaChatResponse>(url, data);
  }

  chatStreamedResponse(data: OllamaChatStreamRequest) : Observable<OllamaChatResponse> {
    let url: string = this.getOllamaApiUrl() + "chat";
    let request: Request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
    }});
      
    return new Observable(observer => {
      fetch(request).then(response => {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        const read = () => {
          reader?.read().then(({ done, value }) => {
            if (done) {
              observer.complete();
              return;
            }

            const chunk = decoder.decode(value, { stream: true });
            try {
              const json = JSON.parse(chunk); // Asume que el chunk es un JSON válido
              observer.next(json);
            } catch (error) {
              observer.error('Error parsing JSON chunk: ' + error);
            }

            read();
          });
        };

        read();
        })
      .catch(error => {
        observer.error('Fetch error: ' + error);
      });
    });
  }

  getOllamaApiUrl() : string {
    return environment.baseUrl + "api/";
  }

}
