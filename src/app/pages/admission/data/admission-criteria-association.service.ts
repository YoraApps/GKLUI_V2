import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdmissionCriteriaAssociationService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:53312/api/AdmissionCriteriaAssociation';
  BatchId : number = 0;
  BatchProgramObjectList = [];

    getAdmissionCriteriaAssociation(BatchId,ProgramId) {
        return this.http.get<BatchProgramObject>(this.baseUrl + '/GetAdmissionCriteriaAssociation?BatchId='+ BatchId+'&ProgramId='+ProgramId);
    }

    AssignCriteria(data) {
        debugger
        return this.http.post<BatchProgramObject>(this.baseUrl + "/UpdateAdmissionCriteriaAssociation", data);
    }
    
}

export interface admissioncriteria {
    AdmissionCriteriaAssociationId: number;
    BatchId: number;
    ProgramId: number;
    CriteriaId: number;
    SetAction?: any;
    CriteriaIds?: any;
    CriteriaDescription: string;
    Active: boolean;
}

export interface BatchProgramObject {
    results: admissioncriteria[];
}