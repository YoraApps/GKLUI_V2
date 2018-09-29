import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FacultyDepartmentService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
    return this.http.get<FacultydeptObject>(this.baseUrl + '/api/FacultyDept/Get');
  }

  saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/FacultyDept/Save", data)
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
    this.http.post(this.baseUrl + "/api/FacultyDept/Save", data)
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


export interface facultydept {
  SetAction: string;
  FacultyDeptId: number;
  FacultyDeptCode: string;
  FacultyDeptName: string;
  FacultyDeptDescription: string;
}

export interface FacultydeptObject {
results: facultydept[];
}

