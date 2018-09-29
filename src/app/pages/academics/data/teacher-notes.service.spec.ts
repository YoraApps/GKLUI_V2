import { TestBed, inject } from '@angular/core/testing';

import { TeacherNotesService } from './teacher-notes.service';

describe('TeacherNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherNotesService]
    });
  });

  it('should be created', inject([TeacherNotesService], (service: TeacherNotesService) => {
    expect(service).toBeTruthy();
  }));
});
