import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeeCreationService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:53312';

  
  getCategoryData() {     
    return this.http.get<feeCategoryobj>(this.baseUrl + '/api/FeeCategory/GetActiveFeeCategory');
  }

  getTypeData() {       
      return this.http.get<feetypeobj>(this.baseUrl + '/api/FeeType/GetActiveFeeType');
    }

}

export interface FeeCategory {
  SetAction?: any;
  FeeCategoryId: number;
  FeeCategoryName: string;
  FeeCategoryDescription: string;
}

export interface feeCategoryobj {
  results: FeeCategory[];
}


export interface FeeType {
  SetAction?: any;
  FeeTypeId: number;
  FeeTypeName: string;
  FeeTypeDescription: string;
}

export interface feetypeobj {
  results: FeeType[];
}

