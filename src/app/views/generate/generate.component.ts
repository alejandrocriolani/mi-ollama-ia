import { Component } from '@angular/core';
import { OllamaService } from '../../shared/services/api-services/ollama.service';
import { LlamaHandleResponseService } from '../../shared/services/local-services/llama-handle-response.service';
import { Llama2Component } from '../../shared/components/llama-2/llama-2.component';
import { OllamaResponse } from '../../shared/models/ollama-response';
import { Llama2Data } from '../../shared/models/llama-2-data';
import { OllamaBasicRequest } from '../../shared/models/ollama-basic-request';
import { HttpDownloadProgressEvent, HttpEvent, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [Llama2Component],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})
export class GenerateComponent {
  preguntasRespuestas: { id: number; prompt: string; response?: OllamaResponse} [] = [];

  constructor(
    private ollamaService: OllamaService,
    private llamaHandleResponse: LlamaHandleResponseService) {}

  callOllama(data: Llama2Data) {

    let pr: { id: number; prompt: string; response?: OllamaResponse} = {
      id: this.preguntasRespuestas.length,
      prompt: data.prompt
    }

    this.preguntasRespuestas.push(pr);

    let ollamaReq: OllamaBasicRequest = new OllamaBasicRequest(data.model, data.prompt);

    this.ollamaService.generateNoStreamedResponse(ollamaReq).subscribe(data => {
      pr.response = data;
    });
  }

  callOllamaStreamed(data: Llama2Data) {

    let pr: { id: number; prompt: string; response?: OllamaResponse} = {
      id: this.preguntasRespuestas.length,
      prompt: data.prompt
    }

    this.preguntasRespuestas.push(pr);

    let ollamaReq: OllamaBasicRequest = new OllamaBasicRequest(data.model, data.prompt);

    this.ollamaService.generateStreamedResponse(ollamaReq).subscribe( {
      next: (event: HttpEvent<OllamaResponse>) => {
        if(event.type === HttpEventType.DownloadProgress) {
          console.log((event as HttpDownloadProgressEvent).partialText);
          //pr.response = event.body as OllamaResponse;
          console.log(event);
        }
        else if(event.type === HttpEventType.Response) {
          pr.response = event.body as OllamaResponse;
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
