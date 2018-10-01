import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseChapterService {

    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:53312/api/CourseChapterAssociation';
    CourseId:number = 0;
    getMappedChapterByCourse(CourseId) {
        return this.http.get<CourseChapterObject>(this.baseUrl + '/GetChapterByCourse?CourseId=' + CourseId);
    }
    getNotMappedChapterByCourse(CourseId) {
        return this.http.get<CourseChapterObject>(this.baseUrl + '/GetProgramBatchNotMapped?CourseId='+ CourseId);
    }
    AssignOrRemoveCourse(data) {
        debugger
        return this.http.post<CourseChapterObject>(this.baseUrl + "/UpdateCourseChapterAssociation", data)
    }   
    setSelectedCourseId(Id) {
        this.CourseId = Id;
    }
    getSelectedCourseId() {
        return this.CourseId;
    }

}

export interface coursechapter {
    CourseId: number;
    ChapterId: number;
    SetAction?: any;
    CourseCode: string;
    ChapterCode: string;
    ChapterName: string;
    CourseName: string;
}

export interface CourseChapterObject {
    results: coursechapter[];
}
