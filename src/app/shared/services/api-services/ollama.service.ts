import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../../models/ollama-model';
import { environment } from '../../../../environments/environment.development';
import { OllamaBasicRequest } from '../../models/ollama-basic-request';
import { OllamaResponse } from '../../models/ollama-response';

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

  generateStreamedResponse(data: OllamaBasicRequest) : Observable<HttpEvent<OllamaResponse>> {
    let url: string = this.getOllamaApiUrl() + "generate";
    return this.http.post<OllamaResponse>(url, data, {observe: 'events', reportProgress: true, responseType: 'json'});

  }

  getOllamaApiUrl() : string {
    return environment.baseUrl + "api/";
  }

}
