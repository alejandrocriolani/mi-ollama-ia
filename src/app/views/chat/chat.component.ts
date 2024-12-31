import { Component } from '@angular/core';
import { Llama2Component } from '../../shared/components/llama-2/llama-2.component';
import { OllamaService } from '../../shared/services/api-services/ollama.service';
import { LlamaHandleResponseService } from '../../shared/services/local-services/llama-handle-response.service';
import { ChatHistoryComponent } from '../../shared/components/chat/chat-history/chat-history.component';
import { Historial } from '../../shared/models/historial';
import { Llama2Data } from '../../shared/models/llama-2-data';
import { OllamaMessage } from '../../shared/models/ollama-message';
import { OllamaBasicChatRequest } from '../../shared/models/ollama-basic-chat-request';
import { OllamaChatStreamRequest } from '../../shared/models/ollama-stream-chat-request';
import { OllamaChatResponse } from '../../shared/models/ollama-chat-response';

@Component({
    selector: 'app-chat',
    imports: [Llama2Component, ChatHistoryComponent],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss'
})
export class ChatComponent {

  historial: Historial [] = [];

  constructor(
    private ollamaService: OllamaService,
    private llamaHandleResponse: LlamaHandleResponseService) {}

  callOllamaChat(data: Llama2Data) {
  
    let ollamaMsg: OllamaMessage = {
      content: data.prompt,
      role: 'user'
    }
    
    let pr: Historial = {
      id: this.historial.length,
      prompt: data.prompt,
      chatMessage: ollamaMsg
    }
    
    this.historial.push(pr);

    let messages: OllamaMessage [] = this.historial.map( h => h.chatMessage).filter(c =>c !== undefined);

    let req: OllamaBasicChatRequest = new OllamaBasicChatRequest(data.model, messages);

    this.ollamaService.chatNoStreamedResponse(req).subscribe(
      data => {
        let pr: Historial = {
          id: this.historial.length,
          prompt: "",
          chatMessage: data.message
        }

        this.historial.push(pr);
      }
    )
  }

  callOllamaChatStream(data: Llama2Data) {
    let ollamaMsg: OllamaMessage = {
      content: data.prompt,
      role: 'user'
    }
    
    let pr: Historial = {
      id: this.historial.length,
      prompt: data.prompt,
      chatMessage: ollamaMsg
    }
    
    this.historial.push(pr);

    let messages: OllamaMessage [] = this.historial.map( h => h.chatMessage).filter(c =>c !== undefined);

    let req: OllamaChatStreamRequest = new OllamaChatStreamRequest(data.model, messages);

    let prRes: Historial = {
      id: this.historial.length,
      prompt: "",
      chatMessage: undefined
    }

    this.ollamaService.chatStreamedResponse(req).subscribe(
      {
        next: (chunk: OllamaChatResponse) => {
          if(prRes.chatMessage === undefined) {
            prRes.chatMessage = chunk.message;
            this.historial.push(prRes);
          } else {
            prRes.chatMessage.content += chunk.message.content;
            //pr.response.images = pr.response.images.concat(chunk.images);
          }
          console.log(chunk);
        },
        error: (error) => {
          console.log(error);
        },
        complete: (): void => {
          console.log('Streamed response completed');
        }
      }
    )
  }

  vaciarChat() {
    this.historial = [];
  }
  
}
