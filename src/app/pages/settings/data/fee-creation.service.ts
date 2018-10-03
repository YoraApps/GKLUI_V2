import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeeCreationService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:53312';

  getTypeData() {       
      return this.http.get<feetypeobj>(this.baseUrl + '/api/FeeType/Get');
    }

    getCategoryData() {       
      return this.http.get<feeCategoryobj>(this.baseUrl + '/api/FeeCategory/Get');
    }
}

export interface FeeType {
  SetAction?: any;
  FeeTypeId: number;
  FeeTypeName: string;
  FeeTypeDescription: string;
  Active: boolean;
}

export interface feetypeobj {
  results: FeeType[];
}

export interface FeeCategory {
  SetAction?: any;
  FeeCategoryId: number;
  FeeCategoryName: string;
  FeeCategoryDescription: string;
  Active: boolean;
}

export interface feeCategoryobj {
  results: FeeCategory[];
}

