import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DriverMasterService {

  constructor() { }
  data = [{
    id: 1,
    DriverName: 'Bala kumar',
    LicenseNo : '2232dff343 ',
    DateOfBirth : '12-05-2018',
    LicenseExpiryDate: '	30-05-2018',
    ContactNumber:	434343,
    NoOfYearsExperience:	5,
    ReferenceName: '	Bala',
    ReferenceContactNo:	23232,
    Address: '	Test',
  }, {
    id: 2,
    DriverName: 'Bala kumar',
    LicenseNo : '2232dff343 ',
    DateOfBirth : '12-05-2018',
    LicenseExpiryDate: '	30-05-2018',
    ContactNumber:	434343,
    NoOfYearsExperience:	5,
    ReferenceName: '	Bala',
    ReferenceContactNo:	23232,
    Address: '	Test',
  }];
  getData() {
    return this.data;
  }
}
