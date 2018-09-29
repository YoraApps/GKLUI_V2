import { Injectable } from '@angular/core';

@Injectable()
export class CounsellingService {

  data = [{
    ApplicationNumber: 103652,
    FirstName: 'Gopi',
    Gender:'male',
    EmailId: 'gopi@gmail.com',
    Address	: 'Guntur',
    ProgramStudyChoice1:'ienginer',
    ProgramStudyChoice2:'ienginer',
    ProgramStudyChoice3:'ienginer',
    DegreeCategory: 'pg',
    DegreeType: 'Master',
    Course: 'EEE',
    Batch: 101,
    AdmissionVerificationStatus: 'Completed',

  },
  {
    ApplicationNumber: 102356,
    FirstName: 'Vijay',
    Gender:'female',
    EmailId: 'vijay@gmail.com',
    Address: 'Ongole',
    ProgramStudyChoice1:'ienginer',
    ProgramStudyChoice2:'ienginer',
    ProgramStudyChoice3:'ienginer',
    DegreeCategory: 'pg',
    DegreeType: 'Doctorate',
    Course: 'EEE',
    Batch: 101,
    AdmissionVerificationStatus: 'Ongoing',

  },

];

  getData() {
    return this.data;
  }
}
