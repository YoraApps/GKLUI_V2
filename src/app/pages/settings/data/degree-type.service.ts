import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DegreeTypeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

  getData() {       
      return this.http.get<degreetypeobj>(this.baseUrl + '/api/DegreeType/Get');
    } 

    getDegreeCategoryData(id) {       
      return this.http.get<degreetypeobj>(this.baseUrl + '/api/DegreeType/Get/'+ id);
    } 

    saveData(data) {
      debugger
      this.http.post(this.baseUrl + "/api/DegreeType/UpdateDegreeType", data)
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

export interface DegreeType {
  SetAction?: any;
  DegreeTypeId: number;
  DegreeTypeCode: string;
  DegreeTypeName: string;
  Active: boolean;
  DegreeCategoryId: number;
}

export interface degreetypeobj {
  results: DegreeType[];
}