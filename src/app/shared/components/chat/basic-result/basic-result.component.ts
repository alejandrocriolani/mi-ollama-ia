import { Component, Input } from '@angular/core';
//import { Llama2Content } from '../../../models/llama-response/llama2-content';

@Component({
    selector: 'app-basic-result',
    imports: [],
    template: `
    <span>
      {{parsedResponse?.result}}
    </span>
  `,
    styles: ``
})
export class BasicResultComponent {
  //@Input() parsedResponse?: Llama2Content;
  @Input() parsedResponse?: any;
}
