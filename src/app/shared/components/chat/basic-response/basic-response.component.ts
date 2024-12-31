import { Component, Input } from '@angular/core';
//import { Llama2Content } from '../../../models/llama-response/llama2-content';

@Component({
  selector: 'app-basic-response',
  standalone: true,
  imports: [],
  template: `
    <div>
      <ol>
        @for(item of parsedResponse?.answers; track item) {
          <li>{{item.text}}</li>
        }
      </ol>
    </div>
  `,
  styles: ``
})
export class BasicResponseComponent {
  //@Input() parsedResponse?: Llama2Content;
  @Input() parsedResponse?: any;
}
