import { Component, Input } from '@angular/core';
//import { OllamaChat } from '../../../models/ollama-chat';
import { LlamaHandleResponseService } from '../../../services/local-services/llama-handle-response.service';
import { ResponseRoles } from '../../../enums/response-roles';
import { ResponseType } from '../../../enums/response-type';
import { BasicResponseComponent } from '../basic-response/basic-response.component';
import { BasicResultComponent } from '../basic-result/basic-result.component';
import { ChatResultComponent } from '../chat-result/chat-result.component';
import { MessageResultComponent } from '../message-result/message-result.component';
import { AnswerResultComponent } from '../answer-result/answer-result.component';
import { MatrixResultComponent } from '../matrix-result/matrix-result.component';
import { AnswersResultComponent } from '../answers-result/answers-result.component';

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [
    BasicResultComponent,
    BasicResponseComponent,
    ChatResultComponent,
    MessageResultComponent,
    AnswerResultComponent,
    AnswersResultComponent,
    MatrixResultComponent
  ],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.scss'
})
export class ChatHistoryComponent {
  //@Input() messsages: OllamaChat [] = [];
  @Input() messsages: any [] = [];

  responseTypes = ResponseType;
  responeRol = ResponseRoles;

  constructor(private llamaHandleResponse: LlamaHandleResponseService) {}

  isResponseType(response: string, type: ResponseType) {
    return false;
    //return this.llamaHandleResponse.isResponseType(response, type);
  }
}
