import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoutecreationService {

  constructor() { }

  data = [{
    From : 'Rajajinagar',
    To: 'ITPL',
    DriverInformation : 'Krishna',
    VehicleDetails : 'KA0CK9911',
    DropingPoints:	'Rajajinagar=>Marathahalli=>IGate=>Saibaba=>Test=>12345=>2356',
  }, {
    From: 'Seshadripuram',
    To: 'BTM',
    DriverInformation : 'BalaKumar',
    VehicleDetails : 'KA0CK1199',
    DropingPoints:	'Seshadripuram=>Marathahalli=>IGate=>Saibaba=>Test=>12345=>2356',
  }];

  getData() {
    return this.data;
  }
}
