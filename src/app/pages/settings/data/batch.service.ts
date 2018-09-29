import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BatchService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';

    getData() {
        return this.http.get<BatchObject>(this.baseUrl + '/api/Batch/GetAcademicYear');
    }

    updateData(data) {
        this.http.post(this.baseUrl + "/api/Batch/UpdateBatch", data)
            .subscribe(
            data1 => {
                console.log('POST Request is successful ' + data1);
            },
            error => {
                console.log('Error' + error);
            },
            );
    }
    getActiveBatches() {
        return this.http.get<BatchObject>(this.baseUrl + '/api/Batch/GetActiveBatch');
    }
}

export interface batch {
  SetAction?: any;
  BatchId: number;
  AcademicYearId: number;
  AcademicYear: string;
}

export interface BatchObject {
  results: batch[];
}
