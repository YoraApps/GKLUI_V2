import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
    return this.http.get<GroupObject>(this.baseUrl + '/api/GroupMaster/GetGroupMaster');
  }

   saveData(data) {
    debugger
    this.http.post(this.baseUrl + "/api/GroupMaster/UpdateGroupMasterDetails", data)
      .subscribe(
      data1 => {
        console.log('POST Request is successful ' + data1);
      },
      error => {
        console.log('Error' + error);
      },
    );
  }

  removeData(GroupMasterId) {
    this.http.post(this.baseUrl + '/api/GroupMaster/RemoveGroupDetails/' + GroupMasterId, null)
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

export interface group{
       SetAction: any;
        GroupMasterId: number;
        GroupCode: string;
        GroupName: string;
        UniversityId: number;
        Active: boolean;
        lastupdateddt?: any;
        lastupdatedby: number;
}

export interface GroupObject {
  results: group[];
}