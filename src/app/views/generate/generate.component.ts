import { Component } from '@angular/core';
import { Llama2Data } from '../../shared/models/llama-2-data';
import { PreguntaRespuesta } from '../../shared/models/pregunta-respueesta';
import { OllamaService } from '../../shared/services/api-services/ollama.service';
import { LlamaHandleResponseService } from '../../shared/services/local-services/llama-handle-response.service';
import { Llama2Component } from '../../shared/components/llama-2/llama-2.component';

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [Llama2Component],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})
export class GenerateComponent {
  preguntasRespuestas: PreguntaRespuesta [] = [];

  constructor(
    private ollamaService: OllamaService,
    private llamaHandleResponse: LlamaHandleResponseService) {}

  callOllama(data: Llama2Data) {
    console.log("NOOOOOO");

    let pr: PreguntaRespuesta = {
      id: this.preguntasRespuestas.length,
      pregunta: data.prompt
    }
    this.preguntasRespuestas.push(pr);

    this.ollamaService.askOllama(data).subscribe(data => {
      pr.respuesta = data.response;
    });
  }
}
