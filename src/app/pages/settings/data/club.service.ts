import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClubService {

    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://testyora-001-site1.itempurl.com';

    getData() {
        return this.http.get<ClubObject>(this.baseUrl + '/api/ClubMaster/GetClubMaster');
    }

    saveData(data) {
        this.http.post(this.baseUrl + "/api/ClubMaster/UpdateClubMasterDetails", data)
            .subscribe(
            data1 => {
                console.log('POST Request is successful ' + data1);
            },
            error => {
                console.log('Error' + error);
            },
            );
    }

    removeData(id) {
        this.http.post(this.baseUrl + '/api/ClubMaster/RemoveClubMaster/' + id, null)
            .subscribe(
            data => {
                console.log('PUT Request is successful ' + data);
            },
            error => {
                console.log('Error' + error);
            },
            );
    }
}

export interface Club {
    SetAction?: any;
    ClubId: number;
    ClubName: string;
    ClubDescription: string;
    Active: boolean;
    lastupdateddt: Date;
    lastupdatedby: number;
}

export interface ClubObject {
    results: Club[];
}


