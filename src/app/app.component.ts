import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Llama2Component } from './shared/components/llama-2/llama-2.component';
import { OllamaService } from './shared/services/api-services/ollama.service';
import { HttpClientModule } from '@angular/common/http';
import { OllamaResponse } from './shared/models/ollama-response';
import { PreguntaRespuesta } from './shared/models/pregunta-respueesta';
import { Llama2Data } from './shared/models/llama-2-data';
import { OllamaChat } from './shared/models/ollama-chat';
import { LlamaHandleResponseService } from './shared/services/local-services/llama-handle-response.service';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    AdminLayoutComponent,
    HttpClientModule,
    Llama2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-ollama-ia';

  
}
