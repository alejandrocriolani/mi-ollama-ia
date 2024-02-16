import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicResponseComponent } from './basic-response.component';

describe('BasicResponseComponent', () => {
  let component: BasicResponseComponent;
  let fixture: ComponentFixture<BasicResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
