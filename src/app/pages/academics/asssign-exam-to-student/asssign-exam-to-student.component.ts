import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BatchService } from '../../settings/data/batch.service';
import { ProgramStudyService } from '../../settings/data/program-study.service';
import { SemesterService } from '../../settings/data/semester.service';
import { ExaminationService } from '../data/examination.service';
import { AsssignExamToStudentService } from '../data/assign-exam-to-student.service';

@Component({
  selector: 'ngx-asssign-exam-to-student',
  templateUrl: './asssign-exam-to-student.component.html',
  styleUrls: ['./asssign-exam-to-student.component.scss']
})
export class AsssignExamToStudentComponent implements OnInit {

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
              
    StudentNumber: {
        title: 'Student Number',
        type: 'string',
      },
      StudentName: {
        title: 'Student Name',
        type: 'string',
      },
      Gender: {
        title: 'Gender',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data;
  batchList: any[];
  SemesterServiceList: any[];
  ProgramStudyList:any[];
  ExaminationList:any[];
  constructor(service: BatchService,private Pservice:ProgramStudyService,
    private Semester:SemesterService,private Examination:ExaminationService,
    private AsssignExamToStudent:AsssignExamToStudentService) {
    this.ExaminationList = this.Examination.getData1();
    const data = this.AsssignExamToStudent.getData1();
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
