import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
    return this.http.get<LocationObject>(this.baseUrl + '/api/LocationMaster/GetAllLocation');
  }

  saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/LocationMaster/SaveLocation", data)
      .subscribe(
      data1 => {
        console.log('POST Request is successful ' + data1);
      },
      error => {
        console.log('Error' + error);
      },
    );
  }

  removeData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/LocationMaster/RemoveLocation",data)
        .subscribe(
        data => {
            console.log('PUT Request is successful ' + data);
        },
        error => {
            console.log('Error' + error);
        },
        );
  }
}



export interface location {
  UniversityId: number;
  LocationId: number;
  LocationName: string;
  LocationAddress: string;
  Latitude: string;
  Longitude: string;
  Active: boolean;
  lastupdateddt: Date;
  lastupdatedby: number;
}

export interface LocationObject {
results: location[];
}

