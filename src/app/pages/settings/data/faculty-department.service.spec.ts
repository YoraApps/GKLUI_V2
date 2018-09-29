import { TestBed, inject } from '@angular/core/testing';

import { FacultyDepartmentService } from './faculty-department.service';

describe('FacultyDepartmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyDepartmentService],
    });
  });

  it('should be created', inject([FacultyDepartmentService], (service: FacultyDepartmentService) => {
    expect(service).toBeTruthy();
  }));
});
