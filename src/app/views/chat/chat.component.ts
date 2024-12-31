import { Component } from '@angular/core';
import { Llama2Component } from '../../shared/components/llama-2/llama-2.component';
import { OllamaService } from '../../shared/services/api-services/ollama.service';
import { LlamaHandleResponseService } from '../../shared/services/local-services/llama-handle-response.service';
import { ChatHistoryComponent } from '../../shared/components/chat/chat-history/chat-history.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [Llama2Component, ChatHistoryComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  messsages: any [] = [];

  constructor(
    private ollamaService: OllamaService,
    private llamaHandleResponse: LlamaHandleResponseService) {}

  callOllamaChat(data: any) {
  }

  callOllamaChatStream(data: any) {
  }

  vaciarChat() {
    this.messsages = [];
  }
  
}
