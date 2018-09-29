import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicantCourseFeeService {

  data = [{
    ApplicationNumber: '021356',
    Name: 'EEE',
    TotalFeestobepaid: '50000',
    TotalFeespaid: '500000',
    PaymentStatus: 'Conform',
    ProgramStudyCode: '78125',
    ProgramStudyName: 'Farmasi',
  }, {
    ApplicationNumber: '045691',
    Name: 'ECE',
    TotalFeestobepaid: '30000',
    TotalFeespaid: '30000',
    PaymentStatus: 'Conform',
    ProgramStudyCode: '78125',
    ProgramStudyName: 'Farmasi',
  }];

  getData() {
    return this.data;
  }
}
