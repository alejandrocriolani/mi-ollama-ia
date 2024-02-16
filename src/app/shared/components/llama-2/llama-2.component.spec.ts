import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Llama2Component } from './llama-2.component';

describe('Llama2Component', () => {
  let component: Llama2Component;
  let fixture: ComponentFixture<Llama2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Llama2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Llama2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
