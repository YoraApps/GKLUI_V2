import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleExamModalService {

  data = [{
    ApplicationNumber: 103652,
    StudentName:'gopi',
    EmailId:'gopi@gmail.com',
    ExamName:'sem',
    ExaminationDate:'2/2/2022',
    StartTime:'12',
    EndTime:'23',
    RoomName:'Pendidikan Guru Sekolah Dasar',
    ExaminerName:'Pendidikan Guru Sekolah Dasar',
    BatchName: 'Document Not Aknowledged',
    ProgramStudyName	: 'Document Reviewed',
  },
  {
    ApplicationNumber: 103652,
    StudentName:'gopi',
    EmailId:'gopi@gmail.com',
    ExamName:'sem',
    ExaminationDate:'2/2/2022',
    StartTime:'12',
    EndTime:'23',
    RoomName:'Pendidikan Guru Sekolah Dasar',
    ExaminerName:'Pendidikan Guru Sekolah Dasar',
    BatchName: 'Document Not Aknowledged',
    ProgramStudyName	: 'Document Reviewed',

  },

];

  getData() {
    return this.data;
  }
}
