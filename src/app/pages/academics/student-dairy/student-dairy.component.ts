import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BatchService } from '../../settings/data/batch.service';
import { ProgramStudyService } from '../../settings/data/program-study.service';
import { StudentDairyService } from '../data/studentDairy.service';
import { SemesterService } from '../../settings/data/semester.service';

@Component({
  selector: 'ngx-student-dairy',
  templateUrl: './student-dairy.component.html',
  styleUrls: ['./student-dairy.component.scss']
})
export class StudentDairyComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {     
    SemesterName: {
        title: 'Semester Name',
        type: 'string',
      },
      TeacherName: {
        title: 'Teacher Name',
        type: 'string',
      },
      StudentName: {
        title: 'Student Name',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data;
  batchList: any[];
  SemesterServiceList: any[];
  ProgramStudyList:any[];
  
  constructor(service: BatchService,private Pservice:ProgramStudyService,private StudentDairy:StudentDairyService,private Semester:SemesterService) {
    
    const data = this.StudentDairy.getData1();
    this.source.load(data);    
    this.Semester.getData()
      .subscribe( data => {
          this.data = data.results;
          console.log(this.data);
          this.SemesterServiceList = this.data;
          console.log(this.ProgramStudyList);
   });
   this.Pservice.getData()
          .subscribe( data => {
            this.data = data.results;
            console.log(this.data);
            this.ProgramStudyList = this.data;
            console.log(this.ProgramStudyList);
          });
  }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
     
  }

}
