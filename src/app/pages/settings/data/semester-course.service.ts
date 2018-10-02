import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SemesterCourseService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:53312/api/SemesterCourseAssociation';
  SemesterId: number = 0;
  CourseSemesterObjectList = [];
  getMappedSemesterByCourse(SemesterId) {
    return this.http.get<CourseSemesterObject>(this.baseUrl + '/GetCourseBySemester?SemesterId=' + SemesterId);
  }
  getNotMappedSemesterByCourse(SemesterId) {
    return this.http.get<CourseSemesterObject>(this.baseUrl + '/GetSemesterCourseNotMapped?SemesterId=' + SemesterId);
  }

  AssignOrRemoveCourse(data) {
    return this.http.post<CourseSemesterObject>(this.baseUrl + "/UpdateSemesterCourseAssociation", data);
  }

  setSelectedSemesterId(id) {
    this.SemesterId = id;
  }

  getSelectedSemesterId() {
    return this.SemesterId;
  }

  setresponseList(dataList) {
    this.CourseSemesterObjectList = dataList;
    if (this.CourseSemesterObjectList.length > 0) {
      this.getUpdatedList();
    }
  }

  getUpdatedList() {
    return this.CourseSemesterObjectList
  }

}
export interface coursesemester {
  SetAction?: any;
  SemesterId: number;
  SemesterCode: string;
  SemesterName: string;
  CourseId: number;
  CourseCode: string;
  CourseName: string;
}

export interface CourseSemesterObject {
  results: coursesemester[];
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
