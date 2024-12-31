import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Llama2Data } from '../../models/llama-2-data';
import { OllamaService } from '../../services/api-services/ollama.service';
import { OllamaModel } from '../../models/ollama-model';

@Component({
    selector: 'app-llama-2',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './llama-2.component.html',
    styleUrl: './llama-2.component.scss'
})
export class Llama2Component implements OnInit {

  @Output() sendPromt = new EventEmitter<Llama2Data>();
  @Output() sendStreamPromt = new EventEmitter<Llama2Data>();
  @Output() clear = new EventEmitter();

  models: OllamaModel [] = [];

  formGroup: FormGroup = new FormGroup( {
      promtFC: new FormControl<string>('', [Validators.required, Validators.minLength(4)]),
      modelFC: new FormControl<string>('', [Validators.required])
    }
  )

  constructor(private ollamaService: OllamaService) {}

  ngOnInit(): void {
    this.ollamaService.getLocalModels().subscribe(
      data => {
        this.models = data.models;
      }
    )
  }

  submitPromt() {
    let data: Llama2Data ={
      prompt: this.formGroup.controls['promtFC'].value,
      model: this.formGroup.controls['modelFC'].value
    }

    this.formGroup.controls['promtFC'].setValue('');
    this.sendPromt.emit(data);
  }

  submitStreamedPromt() {
    let data: Llama2Data ={
      prompt: this.formGroup.controls['promtFC'].value,
      model: this.formGroup.controls['modelFC'].value
    }

    this.formGroup.controls['promtFC'].setValue('');
    this.sendStreamPromt.emit(data);
  }

  clearChat() {
    this.clear.emit();
  }

}
