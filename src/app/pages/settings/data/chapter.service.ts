import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ChapterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

  getData() {
    return this.http.get<ChapterObject>(this.baseUrl + '/api/Chapter/Get');
  }

  saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/Chapter", data)
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

export interface chapter {
  SetAction?: any;
  ChapterId: number;
  ChapterCode: string;
  ChapterName: string;
  Active: boolean;

}

export interface ChapterObject {
  results: chapter[];
}
