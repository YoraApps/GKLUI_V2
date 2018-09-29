import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsssignExamToStudentComponent } from './asssign-exam-to-student.component';

describe('AsssignExamToStudentComponent', () => {
  let component: AsssignExamToStudentComponent;
  let fixture: ComponentFixture<AsssignExamToStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsssignExamToStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsssignExamToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
