import { TestBed, inject } from '@angular/core/testing';

import { SemesterCourseService } from './semester-course.service';

describe('SemesterCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemesterCourseService]
    });
  });

  it('should be created', inject([SemesterCourseService], (service: SemesterCourseService) => {
    expect(service).toBeTruthy();
  }));
});
