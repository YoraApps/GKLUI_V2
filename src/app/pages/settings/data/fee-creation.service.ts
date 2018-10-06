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

    updateData(data) {
      debugger
      this.http.post(this.baseUrl + "/api/FeeCategory/UpdateFeeCategory", data)
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

