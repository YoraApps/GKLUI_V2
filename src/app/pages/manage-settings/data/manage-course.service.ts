import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManageCourseService {

  data = [{
    SubjectCode : 'Discrete systems',
    SubjectName: 'asdfg',
    TeachingType: 'Theory',
    Teacher:'Nagraj Kumar',
    Periods:3,
    SKS: 40,
  },
  {
    SubjectCode : 'Discrete',
    SubjectName: 'CSDS',
    TeachingType: 'Theory',
    Teacher:'Nagraj ',
    Periods:3,
    SKS: 40,
  },
  ];
  data1 = [{    
    ChapterNumber: 'Discrete systems',
    ChapterTitle: 'asdfg',
    ModeofTeaching: 'Class Room',
    ChapterDetails:'Circles',
  },
  {
    ChapterNumber: 'M000C',
    ChapterTitle: 'Circles_new	',
    ModeofTeaching: 'Class Room',
    ChapterDetails:'Circles',
  },
  ];
  getData() {
    return this.data;
  }
  getData1() {
    return this.data1;
  }
}