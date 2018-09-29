import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GradeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
    return this.http.get<GradeObject>(this.baseUrl + '/api/GradeMaster/Get');
  }

  saveData(data) {
    this.http.post(this.baseUrl + "/api/GradeMaster/Save", data)
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
    this.http.post(this.baseUrl + "/api/GradeMaster/Save", data)
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


export interface grade {
  GradeID: number;
  GradeName: string;
  Percentage: number;
  SetAction: string;
  Result: number;
}

export interface GradeObject {
results: grade[];
}



