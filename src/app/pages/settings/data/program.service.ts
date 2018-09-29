import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root',
})

export class ProgramService{

    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:53312';
    getData() { 
             
        return this.http.get<ProgramObject>(this.baseUrl + '/api/Program/Get');
    } 
    getProgramByDegree(DegreeTypeId:number) {               
        return this.http.get<ProgramObject>(this.baseUrl + '/api/Program/GetProgramByDegrees?DegreeTypeId='+DegreeTypeId);
    } 

     saveData(data) {
        this.http.post(this.baseUrl + '/api/Program/InUpPrograms', data)
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

export interface ProgramResult {
    SetAction?: any;
    ProgramId: number;
    ProgramCode: string;
    ProgramName: string;
    Active: boolean;
    DegreeTypeId: number;
    DegreeTypeCode: string;
    DegreeTypeName: string;
}
export interface ProgramObject {
    results: ProgramResult[];
}