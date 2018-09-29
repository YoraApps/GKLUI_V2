import { Injectable } from '@angular/core';

@Injectable()
export class ReviewandApproveService {

  data = [{
    ApplicationNumber: 103652,
    FullName:'gopi',
    Gender:'male',
    EmailId:'gopi@gmail.com',
    Address:'bang',
    BatchName:'cs1',
    ProgramStudyChoice1:'Pendidikan Guru Sekolah Dasar',
    ProgramStudyChoice2:'Pendidikan Guru Sekolah Dasar',
    ProgramStudyChoice3:'Pendidikan Guru Sekolah Dasar',
    DocumentStatus: 'Document Not Aknowledged',
    ApplicationStatus	: 'Document Reviewed',
    button: 'Button #1',
  },
  {
    ApplicationNumber: 102356,
    FullName:'gopi',
    Gender:'female',
    EmailId:'gopi@gmail.com',
    Address:'bang',
    BatchName:'cs1',
    ProgramStudyChoice1:'Pendidikan Guru Sekolah Dasar',
    ProgramStudyChoice2:'Pendidikan Guru Sekolah Dasar',
    ProgramStudyChoice3:'Pendidikan Guru Sekolah Dasar',
    DocumentStatus: 'Document Not Aknowledged',
    ApplicationStatus: 'Admission Form Approved',
    button: 'Button #2',

  },

];

  getData() {
    return this.data;
  }
}
