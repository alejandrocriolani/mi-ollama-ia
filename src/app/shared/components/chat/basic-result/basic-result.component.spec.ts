import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicResultComponent } from './basic-result.component';

describe('BasicResultComponent', () => {
  let component: BasicResultComponent;
  let fixture: ComponentFixture<BasicResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
