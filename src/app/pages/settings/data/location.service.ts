import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor() { }
  data = [{
    id: 1,
    LocationName: 'Marathahalli',
    Address : 'BUSSTOP',
  }, {
     id: 2,
    LocationName: 'hyderabad',
    Address : 'BUSSTOP',
  }];

  getData() {
    return this.data;
  }
}
