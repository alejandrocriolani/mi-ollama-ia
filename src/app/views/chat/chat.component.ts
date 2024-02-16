import { Component } from '@angular/core';
import { Llama2Component } from '../../shared/components/llama-2/llama-2.component';
import { PreguntaRespuesta } from '../../shared/models/pregunta-respueesta';
import { Llama2Data } from '../../shared/models/llama-2-data';
import { OllamaChat } from '../../shared/models/ollama-chat';
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

  messsages: OllamaChat [] = [];

  constructor(
    private ollamaService: OllamaService,
    private llamaHandleResponse: LlamaHandleResponseService) {}

  callOllamaChat(data: Llama2Data) {
    this.ollamaService.chatOllama(data, this.messsages).subscribe(res => {
      let msgRes: OllamaChat = {
        idChat: this.messsages.length,
        content: res.message.content,
        role: res.message.role,
        parsedResponse: this.llamaHandleResponse.parseResponse(res.message.content)
      }
      console.log(msgRes.parsedResponse);
      this.messsages.push(msgRes);
    });
  }

  vaciarChat() {
    this.messsages = [];
  }
  
}
