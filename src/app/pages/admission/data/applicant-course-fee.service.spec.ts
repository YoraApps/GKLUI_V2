import { TestBed, inject } from '@angular/core/testing';

import { ApplicantCourseFeeService } from './applicant-course-fee.service';

describe('ApplicantCourseFeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantCourseFeeService],
    });
  });

  it('should be created', inject([ApplicantCourseFeeService], (service: ApplicantCourseFeeService) => {
    expect(service).toBeTruthy();
  }));
});
