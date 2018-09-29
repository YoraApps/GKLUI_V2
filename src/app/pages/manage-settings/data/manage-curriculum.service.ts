import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManageCurriculumService {

  data = [{
    CourseCode : 'Discrete systems',
    CourseName: 'asdfg',
    CourseType: 'Theory',
    PrerequisiteCourse:'Nagraj Kumar',
    SKS: 40,
  },
  {
    CourseCode : 'Discrete systems',
    CourseName: 'asdfg',
    CourseType: 'Theory',
    PrerequisiteCourse:'Nagraj Kumar',
    SKS: 40,
  },
  ];
  getData() {
    return this.data;
  }
}