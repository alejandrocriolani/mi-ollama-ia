import { Component, Input } from '@angular/core';
//import { Llama2Content } from '../../../models/llama-response/llama2-content';

@Component({
    selector: 'app-answers-result',
    imports: [],
    template: `
    <p>
      answers-result works!
    </p>
  `,
    styles: ``
})
export class AnswersResultComponent {
  //@Input() parsedResponse?: Llama2Content
  @Input() parsedResponse?: any
}
