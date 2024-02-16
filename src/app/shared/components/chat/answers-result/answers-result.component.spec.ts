import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersResultComponent } from './answers-result.component';

describe('AnswersResultComponent', () => {
  let component: AnswersResultComponent;
  let fixture: ComponentFixture<AnswersResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswersResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswersResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
