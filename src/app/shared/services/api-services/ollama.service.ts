import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../../models/ollama-model';
import { environment } from '../../../../environments/environment.development';
import { OllamaBasicRequest } from '../../models/ollama-basic-request';
import { OllamaResponse } from '../../models/ollama-response';
import { OllamaStreamedRequest } from '../../models/ollama-streamed-request';

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

  //generateStreamedResponse(data: OllamaBasicRequest) : Observable<HttpEvent<OllamaResponse>> {
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

/*     return new Observable( observer => {
      this.http.post<OllamaResponse>(url, data, {observe: 'events', reportProgress: true, responseType: 'json'}).subscribe({
        next: (event: HttpEvent<OllamaResponse>) => {
          observer.next(event);
        },
        error: (e) => {
          observer.error(e);
        },
        complete: () => {
          observer.complete();
        }
      })
    }); */
    

    //return this.http.post<OllamaResponse>(url, data, {observe: 'events', reportProgress: true, responseType: 'json'});

  }

  getOllamaApiUrl() : string {
    return environment.baseUrl + "api/";
  }

}
