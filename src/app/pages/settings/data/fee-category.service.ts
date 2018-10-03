import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeeCategoryService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

  getData() {
      return this.http.get<FeeCategoryObject>(this.baseUrl + '/api/FeeCategory/Get');
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


export interface feecategory {
  SetAction?: any;
  FeeCategoryId: number;
  FeeCategoryName: string;
  FeeCategoryDescription: string;
  Active: boolean;
}

export interface FeeCategoryObject {
  results: feecategory[];
}
