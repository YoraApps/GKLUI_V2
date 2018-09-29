import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagepaymentService {

   data1 = [{
    DocumentNumber: '3000008',
    Description	: '	Payroll for PA001-Monthly 01/05/2018 to 31/05/2018',
    PostedDate: '04-09-2018',
    Month: '9',
    Year: '2018',
    Amount: '50000',
  },
{
    DocumentNumber: '3000008',
    Description	: '	Payroll for PA001-Monthly 01/05/2018 to 31/05/2018',
    PostedDate: '04-09-2018',
    Month: '9',
    Year: '2018',
    Amount: '70000',
  },

];

  getData1() {
    return this.data1;
  }
}
