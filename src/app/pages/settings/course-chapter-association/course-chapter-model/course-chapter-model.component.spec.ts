import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChapterModelComponent } from './course-chapter-model.component';

describe('CourseChapterModelComponent', () => {
  let component: CourseChapterModelComponent;
  let fixture: ComponentFixture<CourseChapterModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChapterModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChapterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
