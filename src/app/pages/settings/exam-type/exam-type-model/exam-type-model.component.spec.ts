import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTypeModelComponent } from './exam-type-model.component';

describe('ExamTypeModelComponent', () => {
  let component: ExamTypeModelComponent;
  let fixture: ComponentFixture<ExamTypeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamTypeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTypeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
