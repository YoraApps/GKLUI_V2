import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { BatchService } from "../data/batch.service";
import { CourseService } from "../data/course.service";
import { ProgramStudyService } from "../data/program-study.service";

@Component({
  selector: 'ngx-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  
source: LocalDataSource = new LocalDataSource();
data;
  batchList: any[];
  courseList: any[];
  ProgramStudyList: any[];
  constructor(service: BatchService, _service: CourseService,private services:ProgramStudyService) {
    
   }

  ngOnInit() {
    debugger
    this.services.getData()
          .subscribe( data => {
            this.data = data.results;
            console.log(this.data);
            this.ProgramStudyList = this.data;
            console.log(this.ProgramStudyList);
          });
  }

}
