import { Component } from '@angular/core';
import { Llama2Component } from '../../shared/components/llama-2/llama-2.component';
import { PreguntaRespuesta } from '../../shared/models/pregunta-respueesta';
import { Llama2Data } from '../../shared/models/llama-2-data';
import { OllamaChat } from '../../shared/models/ollama-chat';
import { OllamaService } from '../../shared/services/api-services/ollama.service';
import { LlamaHandleResponseService } from '../../shared/services/local-services/llama-handle-response.service';
import { ChatHistoryComponent } from '../../shared/components/chat/chat-history/chat-history.component';
import { HttpDownloadProgressEvent, HttpEvent, HttpEventType } from '@angular/common/http';

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

      this.messsages.push(msgRes);
    });
  }

  callOllamaChatStream(data: Llama2Data) {
    let msgRes: OllamaChat = {
      idChat: this.messsages.length,
      content: "",
      role: "assistant",
      parsedResponse: undefined
    }

    this.messsages.push(msgRes);
    this.ollamaService.chatOllamaStreamResult(data, this.messsages).subscribe({
      next: (event: HttpEvent<string>) => {
        if (event.type === HttpEventType.DownloadProgress) {
/*           let content: string;
          if(msgRes.content) {
            content = this.llamaHandleResponse.parseResponseStream((
              event as HttpDownloadProgressEvent
            ).partialText).message.content
          } */
          console.log(event);

          msgRes.content+= this.llamaHandleResponse.parseResponseStream((
            event as HttpDownloadProgressEvent
          ).partialText ).message.content + "…";
          console.log(msgRes);
        } else if (event.type === HttpEventType.Response) {
          console.log(event.body);
          //msgRes.content = event.body || "" ;
        }
      },
      error: (error) => {
        console.error(error);
        }
      }
    )
  }

  vaciarChat() {
    this.messsages = [];
  }
  
}
