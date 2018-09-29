import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-manage-student-curriculam',
  templateUrl: './manage-student-curriculam.component.html',
  styleUrls: ['./manage-student-curriculam.component.scss']
})
export class ManageStudentCurriculamComponent implements OnInit {
  semisterList: any;
  ProgramStudyList: any;
  batchList: any;
  constructor() { }

  ngOnInit() {
  }

}
