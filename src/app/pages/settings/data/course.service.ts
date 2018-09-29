import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseService {

    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:53312';
      getData() {       
        return this.http.get<courseObj>(this.baseUrl + '/api/Course/GetCourse');
      }
      
      getCourseType() {       
        return this.http.get<courseObj>(this.baseUrl + '/api/Course/GetCourseType');
      } 

      saveData(data) {
        debugger
        this.http.post(this.baseUrl + "/api/Course/UpdateCourse", data)
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


export interface Course {
  SetAction?: any;
  CourseId: number;
  CourseCode?: any;
  CourseName?: any;
  CourseTypeId: number;
  Active: boolean;
  CourseType: string;
}

export interface courseObj{
    results:Course[];
}
