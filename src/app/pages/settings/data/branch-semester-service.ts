import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BranchSemesterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:53312/api/BranchSemesterAssociation';
  SemesterId=0;
    getMappedSemesterByBranch(BranchId) {
        return this.http.get<BranchSemesterObject>(this.baseUrl + '/GetSemesterByBranch?BranchId='+BranchId);
    }
    setSelectedSemesterId(Id){
      this.SemesterId=Id;
    }

}

  export interface branchsemester {
      BranchSemesterAssociationId: number;
      BranchId: number;
      SemesterId: number; 
      SetAction?: any;
      ProgramIds?: any;
      SemesterCode: string;
      SemesterName: string;
      Active: boolean;
  }

  export interface BranchSemesterObject {
      results: branchsemester[];
  }
