import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root',
})
export class BranchService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

  getData() {
    return this.http.get<BranchObject>(this.baseUrl + '/api/Branch/Get');
  }

  saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/Branch", data)
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

export interface Branch {
  SetAction?: any;
  BranchId: number;
  BranchCode: string;
  BranchName: string;
  Active: boolean;
}

export interface BranchObject {
  results: Branch[];
}

 



