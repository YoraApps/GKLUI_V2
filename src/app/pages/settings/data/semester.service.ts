import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

  getData() {
    return this.http.get<SemesterObject>(this.baseUrl + '/api/Semester/Get');
  }

   saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/Semester/UpdateSemester", data)
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

export interface Semester{
  SetAction?: any;
  SemesterId: number;
  SemesterCode: string;
  SemesterName: string;
  Active: boolean;
}
  export interface SemesterObject {
  results: Semester[];
}


