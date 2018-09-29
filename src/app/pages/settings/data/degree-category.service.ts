import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DegreeCategoryService {

    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:53312';

    getData() {
        return this.http.get<DegreeCategoryObject>(this.baseUrl + '/api/DegreeCategory/Get');
    }

    updateData(data) {
        debugger
        this.http.post(this.baseUrl + "/api/DegreeCategory/UpdateDegreeCategory", data)
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



export interface degreecategory {
    SetAction?: any;
    DegreeCategoryId: number;
    DegreeCategoryCode: string;
    DegreeCategoryName: string;
    Active: boolean;
}

export interface DegreeCategoryObject {
    results: degreecategory[];
}
