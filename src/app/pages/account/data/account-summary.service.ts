import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountSummaryService {

  data1 = [{
    DocumentNumber: '3000008',
    DocumentType: 'Expenses',
    Description	: '	Payroll for PA001-Monthly 01/05/2018 to 31/05/2018',
    PostedDate: '04-09-2018',
    Status: 'PAID',
    Month: '9',
    Year: '2018',

  },
{
    DocumentNumber: '3000021',
    DocumentType: 'Income',
    Description	: '	Academics Fee Of vipinTestBatch-Prgm_Choice1_007-Semester 2 CS for 2018-A-C.CSE.000001-Santanu',
    PostedDate: '05-09-2018',
    Status: 'PENDING',
    Month: '8',
    Year: '2017',

  },

];

  getData1() {
    return this.data1;
  }
}
