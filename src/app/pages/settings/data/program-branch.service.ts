import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProgramBranchService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312/api/ProgramBranchAssociation';
  ProgramId:number = 0;
    getMappedBranchByProgram(ProgramId) {
        return this.http.get<ProgramBranchObject>(this.baseUrl + '/GetProgramByBranch?ProgramId='+ProgramId);
    }
    getNotMappedBranchByProgram(ProgramId) {
      return this.http.get<ProgramBranchObject>(this.baseUrl + '/GetProgramBranchNotMapped?ProgramId='+ ProgramId);
    }
    AssignOrRemoveBranch(data) {
        debugger
        this.http.post(this.baseUrl + "/UpdateProgramBranchAssociation", data)
        .subscribe(
        success => {
            console.log('POST Request is successful ' + success);
        },
        error => {
            console.log('Error' + error);
        },
        );
    }    
    setSelectedProgramId(id) {
        this.ProgramId = id;
    }

    getSelectedProgramId() {
        return this.ProgramId;
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