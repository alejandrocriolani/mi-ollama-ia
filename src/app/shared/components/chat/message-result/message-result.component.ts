import { Component, Input } from '@angular/core';
//import { Llama2Content } from '../../../models/llama-response/llama2-content';

@Component({
    selector: 'app-message-result',
    imports: [],
    template: `
    <span>
      {{parsedResponse?.text}}
    </span>
  `,
    styles: ``
})
export class MessageResultComponent {
  //@Input() parsedResponse?: Llama2Content;
  @Input() parsedResponse?: any;
}
