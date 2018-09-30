import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoleserviceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

  getData() {
    return this.http.get<RoleObject>(this.baseUrl + '/api/Role/GetRole');
  }
  updateData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/Role/InsertUpdateDeleteRole", data)
      .subscribe(
      data1 => {
        console.log('POST Request is successful ' + data1);
      },
      error => {
        console.log('Error' + error);
      },
    );
  }
}

export interface Role {
  SetAction?: any;
  UserId: number;
  UserName: string;
  EmailAddress: string;
  PhoneNumber: string;
  Gender: string;
  password: string;
  RoleId:number;
  Active: boolean;
}

export interface RoleObject {
  results: Role[];
}

