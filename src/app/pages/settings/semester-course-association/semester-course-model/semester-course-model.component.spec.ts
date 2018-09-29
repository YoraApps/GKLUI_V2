import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterCourseModelComponent } from './semester-course-model.component';

describe('SemesterCourseModelComponent', () => {
  let component: SemesterCourseModelComponent;
  let fixture: ComponentFixture<SemesterCourseModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterCourseModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterCourseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
