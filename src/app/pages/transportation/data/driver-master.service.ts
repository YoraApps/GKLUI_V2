import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DriverMasterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
    return this.http.get<DriverObject>(this.baseUrl + '/api/DriverMaster/Get');
  }

  saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/DriverMaster/Save", data)
      .subscribe(
      data1 => {
        console.log('POST Request is successful ' + data1);
      },
      error => {
        console.log('Error' + error);
      },
    );
  }

  removeData(DriverId) {
    debugger
    this.http.post(this.baseUrl + "/api/DriverMaster/delete?DriverId="+ DriverId,null)
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



export interface driver {
  UniversityId: number;
  DriverId: number;
  DriverName: string;
  DriverLicenceNo: string;
  DriverLicenceExpDate: string;
  DriverMobileNo: string;
  AlternativeContactNo: string;
  Active: boolean;
  lastupdateddt: Date;
  lastupdatedby: number;
  DateofBirth: Date;
  ReferenceName: string;
  ReferenceContactNo: string;
  Address: string;
  Experience: string;
}

export interface DriverObject {
results: driver[];
}

