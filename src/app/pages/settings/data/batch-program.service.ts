import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BatchProgramService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:53312/api/BatchProgramAssociation';
  BatchId : number = 0;
  BatchProgramObjectList = [];

    getMappedProgramByBatch(BatchId) {
        return this.http.get<BatchProgramObject>(this.baseUrl + '/GetProgramByBatch?BatchId='+ BatchId);
    }

    getNotMappedProgramByBatch(BatchId) {
        return this.http.get<BatchProgramObject>(this.baseUrl + '/GetProgramBatchNotMapped?BatchId='+ BatchId);
    }

    AssignOrRemoveProgram(data) {
        debugger
        return this.http.post<BatchProgramObject>(this.baseUrl + "/UpdateProgramBatchAssociation", data);
    }
    
    setSelectedBatchId(id) {
        this.BatchId = id;
    }

    getSelectedBatchId() {
        return this.BatchId;
    }

    setresponseList(dataList) {
        this.BatchProgramObjectList = dataList;
        if(this.BatchProgramObjectList.length > 0){
            this.getUpdatedList();
        }
    }

    getUpdatedList() {
        return this.BatchProgramObjectList
    }

}

export interface batchprogram {
    SetAction?: any;
    BatchId: number;
    AcademicYearId: number;
    AcademicYear: string;
    ProgramId: number;
    ProgramCode: string;
    ProgramName: string;
    IsSelected:boolean;
  }
  
  export interface BatchProgramObject {
    results: batchprogram[];
  }

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  