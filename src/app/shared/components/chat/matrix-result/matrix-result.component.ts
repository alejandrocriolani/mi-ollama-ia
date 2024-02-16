import { Component, Input } from '@angular/core';
import { Llama2Content } from '../../../models/llama-response/llama2-content';

@Component({
  selector: 'app-matrix-result',
  standalone: true,
  imports: [],
  template: `
    <div>Dimensión: {{ parsedResponse?.dimension }}</div>
    <div>Matriz:</div>
    @for(fila of parsedResponse?.elements; track fila) {
      <div class="flex gap-2">
        @for(e of fila; track e) {
          <span>{{ e }}</span>
        }
      </div>
    }
  `,
  styles: ``,
})
export class MatrixResultComponent {
  @Input() parsedResponse?: Llama2Content
}
