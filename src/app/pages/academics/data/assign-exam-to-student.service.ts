import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsssignExamToStudentService {

  data1 = [{ 
    StudentNumber: 'Expenses',
    StudentName: 'Payroll',
    Gender: 'female',
  },
 {
    StudentNumber: 'Expenses',
    StudentName: 'Payroll',
    Gender: 'female',
  },

];

  getData1() {
    return this.data1;
  }
}
