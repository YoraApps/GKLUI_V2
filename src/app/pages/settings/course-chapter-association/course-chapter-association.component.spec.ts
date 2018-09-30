import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChapterAssociationComponent } from './course-chapter-association.component';

describe('CourseChapterAssociationComponent', () => {
  let component: CourseChapterAssociationComponent;
  let fixture: ComponentFixture<CourseChapterAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChapterAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChapterAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
