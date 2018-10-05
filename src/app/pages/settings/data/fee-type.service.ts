import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeeTypeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

  getData() {
      return this.http.get<FeeTypeObject>(this.baseUrl + '/api/FeeType/Get');
  }

  updateData(data) {
      debugger
      this.http.post(this.baseUrl + "/api/FeeType/UpdateFeeType", data)
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


export interface feetype {
  SetAction?: any;
  FeeTypeId: number;
  FeeTypeName: string;
  FeeTypeDescription: string;
  Active: boolean;
}

export interface FeeTypeObject {
  results: feetype[];
}




