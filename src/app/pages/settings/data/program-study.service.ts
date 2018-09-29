import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProgramStudyService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
    debugger
    return this.http.get<ProgramStudyObject>(this.baseUrl + '/api/ProgramStudies/Get');
  }

  saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/ProgramStudies/Save", data)
      .subscribe(
      data1 => {
        console.log('POST Request is successful ' + data1);
      },
      error => {
        console.log('Error' + error);
      },
    );
  }

  removeData(programStudyid) {
    this.http.post(this.baseUrl + '/api/ProgramStudies/Delete?programStudyid=' + programStudyid, null)
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


export interface ProgramStudy {
      ProgramStudyId: number;
      ProgramStudyCode: number;
      ProgramStudyName: string;
      AcademicTerm: string;
      SKS: number;
      Status: boolean;
      UniversityId: number;
      active: number;
      lastupdateddt: Date;
      lastupdatedby: number;
      UserId: number;
      TokenId: string;
}

export interface ProgramStudyObject {
  results: ProgramStudy[];
}
