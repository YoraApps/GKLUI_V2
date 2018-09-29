import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramSemAssociationService {

  data1 = [{
    SemesterCode: 2010,
    SemesterName: 'asdfg',
    SKS: 40,
  },
  {
    SemesterCode: 2009,
    SemesterName: 'kjhgfd',
    SKS: 40,
  },
  ];
  data = [{
    FeeLabel: 'tutionfee',
    Amount: 10000,
    FeeType: 'NR',
    Description:'Tuition Fee',
  },
  {
    FeeLabel: 'Miscellaneous',
    Amount: 10000,
    FeeType: 'NR',
    Description:'Miscellaneous',
  },
  ];
  getData1() {
    return this.data1;
  }
  getData() {
    return this.data;
  }
}
