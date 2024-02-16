import { Component, Input } from '@angular/core';
import { Llama2Content } from '../../../models/llama-response/llama2-content';

@Component({
  selector: 'app-chat-result',
  standalone: true,
  imports: [],
  template: `
    <span>
      {{parsedResponse?.text}}
    </span>
  `,
  styles: ``
})
export class ChatResultComponent {
  @Input() parsedResponse?: Llama2Content
}
