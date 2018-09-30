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
        this.http.post(this.baseUrl + "/UpdateCourseChapterAssociation", data)
        .subscribe(
        success => {
            console.log('POST Request is successful ' + success);
        },
        error => {
            console.log('Error' + error);
        },
        );
    }   
    setSelectedCourseId(Id) {
        this.CourseId = Id;
    }
    getSelectedCourseId() {
        return this.CourseId;
    }

}

export interface coursechapter {
    CourseChapterAssociationId: number;
    CourseId: number;
    ChapterId: number;
    SetAction?: any;
    ChapterIds?: any;
    ChapterCode: string;
    ChapterName: string;
    Active: boolean;
}

export interface CourseChapterObject {
    results: coursechapter[];
}
