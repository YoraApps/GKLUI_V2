import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeavesService {

  constructor() { }
  data1 = [{
    FullName: 'Barcha',
    LeaveType: 'Annual Leave',
    StartDate: '1-2-2019',
    EndDate : '1-2-2019',
    ApplyDate: '2-2-2013',
    Days: 1,
    Status: 'Aprroved',
    Remarks: '	Cepat sembuh',
  }, {
    FullName: 'allu',
    LeaveType: 'Annual Leave',
    StartDate: '31-03-2018',
    EndDate : '31-03-2018',
    ApplyDate: '31-03-2018',
    Days: 1,
    Status: 'Pending',
    Remarks: '	Approved!',
  }];
  data2 = [{
    FullName: 'allu',
    LeaveType: 'Annual Leave',
    StartDate: '1-2-2019',
    EndDate : '1-2-2019',
    ApplyDate: '2-2-2013',
    Days: 1,
    Status: 'Pending',
    Remarks: 'abc',
  }, {
    FullName: 'usha',
    LeaveType: 'Annual Leave',
    StartDate: '1-2-2019',
    EndDate : '1-2-2019',
    ApplyDate: '2-2-2013',
    Days: 1,
    Status: 'Pending',
    Remarks: 'abc',
  }];
  data3 = [{
    FullName: 'Santanu',
    StartDate: '1-2-2019',
    EndDate : '1-2-2019',
    ApplyDate: '2-2-2013',
    Days: 1,
    Status: 'Cancelled',
    Remarks: 'Testing Remarks',
  }, {
    FullName: '	Anil',
    StartDate: '21-2-2019',
    EndDate : '21-2-2019',
    ApplyDate: '22-2-2013',
    Days: 1,
    Status: 'Approved',
    Remarks: 'need more details',
  }];
  data4 = [{
    FullName: 'Santanu',
    StartDate: '08-08-2018',
    EndDate : '1-2-2019',
    ApplyDate: '2-2-2013',
    Days: 1,
    Status: 'Pending',
    Remarks: '',
  }, {
    FullName: 'Anil',
    StartDate: '1-2-2019',
    EndDate : '1-2-2019',
    ApplyDate: '2-2-2013',
    Days: 1,
    Status: 'Cancelled',
    Remarks: 'need more details',
  }, {
    FullName: 'pink',
    StartDate: '1-2-2019',
    EndDate : '1-2-2019',
    ApplyDate: '2-2-2013',
    Days: 1,
    Status: 'Cancelled',
    Remarks: 'need more details',
  }, {
    FullName: 'Anu',
    StartDate: '1-2-2019',
    EndDate : '1-2-2019',
    ApplyDate: '2-2-2013',
    Days: 1,
    Status: 'Cancelled',
    Remarks: 'need more details',
  }];

  getApplyEmpData() {
    return this.data1;
  }
  getAproveEmpData() {
    return this.data2;
  }
  getApplyStudData() {
    return this.data3;
  }
  getAproveStudData() {
    return this.data4;
  }
}
