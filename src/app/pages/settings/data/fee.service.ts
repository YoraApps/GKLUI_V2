import { Injectable } from '@angular/core';

@Injectable()
export class FeeService {

  data = [{
    id: 1,
    FeeLabel: 'Tuition Fee',
    FeeType: 'Refundable',
    Description: 'Tuition Fee',
    IsActive: '1',
    CreatedBy: '53',
    CreatedOn: '03/09/2018',
    ModifiedBy: '36',
    ModifiedOn: '02/09/2018',
  }, {
    id: 2,
    FeeLabel: 'Laboratory Fee',
    FeeType: 'Non-Refundable',
    Description: 'Laboratory Fee',
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
