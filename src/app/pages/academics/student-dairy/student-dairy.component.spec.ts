import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDairyComponent } from './student-dairy.component';

describe('StudentDairyComponent', () => {
  let component: StudentDairyComponent;
  let fixture: ComponentFixture<StudentDairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
