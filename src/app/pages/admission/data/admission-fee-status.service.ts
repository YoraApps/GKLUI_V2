import { Injectable } from '@angular/core';

@Injectable()
export class AdmissionFeeStatusService {

  data = [{
    ApplicationNumber: 103652,
    Name: 'Gopi',
    PaymentStatus:'	NOT PAID',
    ApplicationFormFee: 1000,
    EntranceExamFee	: 2000,
    TotalFeesToBePaid: 1500,
    TotalFeesPaid: 2000,
  },
  {
    ApplicationNumber: 103652,
    Name: 'Gopi',
    PaymentStatus:'	NOT PAID',
    ApplicationFormFee: 1000,
    EntranceExamFee	: 1000,
    TotalFeesToBePaid: 1500,
    TotalFeesPaid: 3000,
  },

];

  getData() {
    return this.data;
  }
}
