import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BatchService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312';
  AcademicYearId:number=0;
  resBatchList = [];

    getData() {
        return this.http.get<BatchObject>(this.baseUrl + '/api/Batch/GetAcademicYear');
    }

    getAllBatch() {
        return this.http.get<BatchObject>(this.baseUrl + '/api/Batch/GetBatch');
    }

    updateData(data) {
        debugger
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

    saveBatchCreated(dataObj) {
        debugger
        return this.http.post<BatchObject>(this.baseUrl + '/api/Batch/UpdateBatch', dataObj);
    }

    setresArray(arr) {
        this.resBatchList = arr;
        this.getresArray()
    }

    getresArray() {
       return this.resBatchList;
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
