import { Injectable } from '@angular/core';

@Injectable()
export class MeritAndDemeritsService {

  data1 = [{
    DateAndDay: '2018-05-08T00:00:00',
    GoodConduct: 'Good in academics',
    MisConduct	: '	Average in Behavior',
    ActionTeacher: 'John Smith',
    Venue: 'Auditorium',
    ClassMonitorWitness: 'Rajesh Jha',

  },
{
    DateAndDay: '2018-05-08T00:00:00',
    GoodConduct: 'Good in academics',
    MisConduct	: '	Average in Behavior',
    ActionTeacher: 'John Smith',
    Venue: 'Auditorium',
    ClassMonitorWitness: 'Rajesh Jha',

  },

];

  getData1() {
    return this.data1;
  }
}
