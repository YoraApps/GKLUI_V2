import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor() { }
  data = [{
    id: 1,
    LicenseNumber: 'AP0CK9911',
    Description : 'BIKE',
    OwnerNumber : 89885,
    WeightCapacity:	120,
    VehicleStatus: 1,
    RegistrationDate:	'19-05-2018',
    InsuranceDetails: 'Test',
    InsuranceExpiryDate: '19-05-2018',
  }, {
    id: 2,
    LicenseNumber: 'AP0CK9911',
    Description : 'BIKE',
    OwnerNumber : 89885,
    WeightCapacity:	120,
    VehicleStatus: 1,
    RegistrationDate:	'19-05-2018',
    InsuranceDetails: 'Test',
    InsuranceExpiryDate: '19-05-2018',
  }];

  getData() {
    return this.data;
  }
}
