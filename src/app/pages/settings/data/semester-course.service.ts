import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemesterCourseService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:53312/api/SemesterCourseAssociation';
  ProgramId:number = 0;
    getMappedSemesterByCourse(SemesterId) {
        return this.http.get<CourseSemesterObject>(this.baseUrl + '/GetCourseBySemester?SemesterId='+SemesterId);
    }
    getNotMappedSemesterByCourse(SemesterId) {
      return this.http.get<CourseSemesterObject>(this.baseUrl + '/GetSemesterCourseNotMapped?SemesterId='+ SemesterId);
    }

}

export interface coursesemester {
  SetAction?: any;   
  SemesterId:number;
  SemesterCode:string;
  SemesterName:string;   
  CourseId: number;
  CourseCode: string;
  CourseName: string;
}

export interface CourseSemesterObject {
  results: coursesemester[];
}
