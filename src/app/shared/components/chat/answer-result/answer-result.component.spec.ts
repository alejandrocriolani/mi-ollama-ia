import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerResultComponent } from './answer-result.component';

describe('AnswerResultComponent', () => {
  let component: AnswerResultComponent;
  let fixture: ComponentFixture<AnswerResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
