import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterCourseAssociationComponent } from './semester-course-association.component';

describe('SemesterCourseAssociationComponent', () => {
  let component: SemesterCourseAssociationComponent;
  let fixture: ComponentFixture<SemesterCourseAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterCourseAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterCourseAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
