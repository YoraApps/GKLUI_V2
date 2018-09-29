import { Injectable } from '@angular/core';

@Injectable()
export class MemoCircularNoticeService {

  data = [{
    Id: 1,
    Title: 'Asiad Games',
    PublishedDate: '2018-08-24',
    Type	: 'Student',

  },
  {
    Id: 2,
    Title: 'National-Level Seminar 123',
    PublishedDate: '2018-08-20',
    Type: 'Staff',

  },

];

  getData() {
    return this.data;
  }
}
