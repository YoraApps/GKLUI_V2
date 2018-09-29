import { Injectable } from '@angular/core';

@Injectable()
export class TeacherNotesService {

   data = [{
    Id: 1,
    Semester: 'Asiad Games',
    TeacherName: '2018-08-24',
    CourseName	: 'Student',
    CreatedOn: '',
    UpdatedOn: '',
    TeacherNotes: '',

  },
  {
    Id: 2,
    Semester: 'National-Level Seminar 123',
    TeacherName: '2018-08-20',
    CourseName: 'Staff',
    CreatedOn: '',
    UpdatedOn: '',
    TeacherNotes: '',

  }];

  getData() {
    return this.data;
  }
}
