import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BatchService } from '../../settings/data/batch.service';
import { CourseService } from '../../settings/data/course.service';
import { ApplicantCourseFeeService } from '../data/applicant-course-fee.service';
import { ProgramStudyService } from '../../settings/data/program-study.service';

@Component({
  selector: 'ngx-applicant-course-fee-status',
  templateUrl: './applicant-course-fee-status.component.html',
  styleUrls: ['./applicant-course-fee-status.component.scss'],
})
export class ApplicantCourseFeeStatusComponent implements OnInit {

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
      ApplicationNumber: {
        title: 'Application Number',
        type: 'string',
      },
      Name: {
        title: 'Name',
        type: 'string',
      },
      TotalFeestobepaid: {
        title: 'Total Fees to be paid',
        type: 'string',
      },
      TotalFeespaid: {
        title: 'Total Fees paid',
        type: 'string',
      },
      PaymentStatus: {
        title: 'Payment Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  data;

  batchList: any[];
  ProgramStudyList:any[];

  constructor(service: BatchService, _service: CourseService, private services: ApplicantCourseFeeService,private Pservice:ProgramStudyService) {
    
   
   }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {

     this.Pservice.getData()
          .subscribe( data => {
            this.data = data.results;
            console.log(this.data);
            this.ProgramStudyList = this.data;
            console.log(this.ProgramStudyList);
          });
  }

}
