import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdmissionCriteriaService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

  getData() {
    return this.http.get<AdmissionCriteriaObject>(this.baseUrl + '/api/AdmissionCriteria/Get');
  }

   saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/AdmissionCriteria/UpdateAdmissionCriteria", data)
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

export interface AdmissionCriteria{
  SetAction?: any;
  CriteriaId: number;
  CriteriaDescription: string;
  Active: boolean;
}
  export interface AdmissionCriteriaObject {
  results: AdmissionCriteriaObject[];
}


