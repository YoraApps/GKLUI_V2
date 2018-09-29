import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultUploadComponent } from './exam-result-upload.component';

describe('ExamResultUploadComponent', () => {
  let component: ExamResultUploadComponent;
  let fixture: ComponentFixture<ExamResultUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamResultUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
