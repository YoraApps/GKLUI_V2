import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ChapterService {

   constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
    return this.http.get<ChapterObject>(this.baseUrl + '/api/ChapterMasters/Get');
  }

  saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/ChapterMasters/Save", data)
      .subscribe(
      data1 => {
        console.log('POST Request is successful ' + data1);
      },
      error => {
        console.log('Error' + error);
      },
    );
  }

   removeData(ChapterId) {
    this.http.post(this.baseUrl + '/api/ChapterMasters/Delete?ChapterId=' + ChapterId, null)
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

export interface chapter{
        ChapterId: number;
        ChapterNumber: string;
        ChapterTitle: string;
        ModeOfTeaching: string;
        ChapterDetails: string;
        SKS: number;
        UniversityId?: any;
        active?: any;
        lastupdateddt?: any;
        lastupdatedby?: any

}

export interface ChapterObject {
  results: chapter[];
}
