import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ProgramBranchService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312/api/ProgramBranchAssociation';
  ProgramId:number = 0;
  ProgramBranchObjectList=[];
    getMappedBranchByProgram(ProgramId) {
        return this.http.get<ProgramBranchObject>(this.baseUrl + '/GetProgramByBranch?ProgramId='+ProgramId);
    }
    getNotMappedBranchByProgram(ProgramId) {
      return this.http.get<ProgramBranchObject>(this.baseUrl + '/GetProgramBranchNotMapped?ProgramId='+ ProgramId);
    }
    AssignOrRemoveBranch(data) {
       return this.http.post<ProgramBranchObject>(this.baseUrl + "/UpdateProgramBranchAssociation", data);       
    }    
    setSelectedProgramId(id) {
        this.ProgramId = id;
    }

    getSelectedProgramId() {
        return this.ProgramId;
    }
    setresponseList(dataList) {
        this.ProgramBranchObjectList = dataList;
        if(this.ProgramBranchObjectList.length > 0){
            this.getUpdatedList();
        }
    }

    getUpdatedList() {
        return this.ProgramBranchObjectList
    }

}

export interface programbranch {
    SetAction?: any;   
    BranchId:number;
    BranchCode:string;
    BranchName:string;   
    ProgramId: number;
    ProgramCode: string;
    ProgramName: string;
  }
  
  export interface ProgramBranchObject {
    results: programbranch[];
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };