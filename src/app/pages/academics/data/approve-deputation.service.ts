import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApproveDeputationService {

   data = [{
    Id: 1,    
    FromDate: '2018-10-25',
    ToDate: '2018-08-24',
    UniversityName: 'UNIVERSITAS MUHAMMADIYAH YOGYAKARTA',
    Remarks: 'Deputing to Yogyakarta',
    Status: 'OnHold',

  },
  {
    Id: 2,    
    FromDate: '2018-10-20',
    ToDate: '2018-08-04',
    UniversityName: 'UNIVERSITAS MUHAMMADIYAH YOGYAKARTA',
    Remarks: 'Deputing to Yogyakarta',
    Status: 'Created',

  }];

  getData() {
    return this.data;
  }
}
