import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentDairyService {

  data1 = [{    
    SemesterName: '3000008',
    TeacherName: 'Expenses',
    StudentName	: '	Payroll for PA001-Monthly 01/05/2018 to 31/05/2018',
    Description: 'aaaa',
    CourseName: 'PAID',
  },
 {
    SemesterName: '3000008',
    TeacherName: 'Expenses',
    StudentName	: '	Payroll for PA001-Monthly 01/05/2018 to 31/05/2018',
    Description: 'aaaa',
    CourseName: 'PAID',
  },

];

  getData1() {
    return this.data1;
  }
}
