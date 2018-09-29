import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ExamTypeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData(id) {
    return this.http.get<ExamObject>(this.baseUrl + '/api/ExaminationTypes/GetAllExamType?UniversityId=' + id);
  }

  saveData(data) {
    this.http.post(this.baseUrl + '/api/ExaminationTypes/Save', data)
        .subscribe(
        data1 => {
            console.log('POST Request is successful ' + data1);
            debugger
        },
        error => {
            console.log('Error' + error);
        },
        );
}
removeData(id) {    
  this.http.post(this.baseUrl + '/api/ExaminationTypes/Delete/' + id, null)
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

export interface Exam {
      ExaminationTypeId: number;
      ExamGroup: string;
      ExamName: string;
}

export interface ExamObject {
    results: Exam[];
}



