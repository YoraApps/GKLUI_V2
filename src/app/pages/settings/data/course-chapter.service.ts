import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseChapterService {

    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:53312/api/CourseChapterAssociation';
    ChapterId = 0;
    getMappedChapterByCourse(CourseId) {
        return this.http.get<CourseChapterObject>(this.baseUrl + '/GetChapterByCourse?CourseId=' + CourseId);
    }
    setSelectedChapterId(Id) {
        this.ChapterId = Id;
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
