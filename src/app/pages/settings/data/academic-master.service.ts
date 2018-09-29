import { Injectable } from '@angular/core';

@Injectable()
export class AcademicMasterService {

  data = [{
    id: 1,
    AcademicId: '26626',
    AcademicCode: 'IITB',
    AcademicYear: '2017-18',
    AcademicTerm: '1 semister',
    ResultType: '60',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    AcademicId: '36549',
    AcademicCode: 'IITB',
    AcademicYear: '2018-19',
    AcademicTerm: '2 semister',
    ResultType: '70',
    IsActive: '1',
    CreatedBy: '43',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }];

  getData() {
    return this.data;
  }
}
