import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExaminationService {

  data1 = [{    
    No: '3000008',
    CourseCode: 'Expenses',
    CourseName	: 'Payroll',
    TotalMarks: 123,
    PassMarks: 233,
  },
 {
    No: '3000008',
    CourseCode: 'Expenses',
    CourseName	: 'Payroll',
    TotalMarks: 123,
    PassMarks: 233,
  },

];

  getData1() {
    return this.data1;
  }
}
