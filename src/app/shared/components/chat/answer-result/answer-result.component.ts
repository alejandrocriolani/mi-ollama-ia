import { Component, Input } from '@angular/core';
//import { Llama2Content } from '../../../models/llama-response/llama2-content';

@Component({
  selector: 'app-answer-result',
  standalone: true,
  imports: [],
  template: `
    <span>
      {{parsedResponse?.text}}
    </span>
  `,
  styles: ``
})
export class AnswerResultComponent {
  //@Input() parsedResponse?: Llama2Content
  @Input() parsedResponse?: any
}
