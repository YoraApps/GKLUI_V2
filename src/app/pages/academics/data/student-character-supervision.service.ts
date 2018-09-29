import { Injectable } from '@angular/core';

@Injectable()
export class StudentCharacterSupervisionService {

  data = [{
    ReportName: 'Disturbance',
    StudentName: 'Santanu',
    CounsellorName: 'Punit',
    Excellent: '	NA',
    Standard: '	NA',
    Disturbance: '	NA',
    Remark: '	NA',
  },
  {
    ReportName: 'Disturbance',
    StudentName: 'Gopi',
    CounsellorName: 'Punit',
    Excellent: 'NA',
    Standard: 'NA',
    Disturbance: 'NA',
    Remark: 'NA',
  }];
  LossAndFounddata = [{
    Name: 'Santanu',
    Class: 'Semester 1 CS-CS001',
    Things: 'Walet',
    LostDate: '2018-05-22T00:00:00',
    FoundDate: '2018-05-22T00:00:00',
    Type: 'Lost',
  },
  {
    Name: 'Sandi',
    Class: 'Semester 2 CS-CS001',
    Things: 'Walet',
    LostDate: '2018-05-22T00:00:00',
    FoundDate: '2018-05-22T00:00:00',
    Type: 'Lost',
  }];
  LetterPermissiondata = [{
    Name: 'Santanu',
    Course: 'Semester 1 CS-CS001',
    Date: 'Walet',
    TimeIn: '2018-05-22T00:00:00',
    TimeOut: '2018-05-22T00:00:00',
  },
  {
    Name: 'Santanu',
    Course: 'Semester 1 CS-CS001',
    Date: '	2018-06-30T00:00:00',
    TimeIn: '2018-05-22T00:00:00',
    TimeOut: '2018-05-22T00:00:00',
  }];
  getData() {
    return this.data;
  }
  getLossAndFounddata() {
    return this.LossAndFounddata;
  }
  getLetterPermissiondata() {
    return this.LetterPermissiondata;
  }
}
