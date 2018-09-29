import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { CounsellingService } from '../data/counselling.service';
import { BatchService } from '../../settings/data/batch.service';
import { CourseService } from '../../settings/data/course.service';
import { ProgramStudyService } from '../../settings/data/program-study.service';

@Component({
  selector: 'ngx-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.scss'],
})
export class CounsellingComponent {

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
        type: 'number',
      },
      FirstName: {
        title: 'First Name',
        type: 'string',
      },
      Gender:{
        title: 'Gender',
        type: 'string',
      },
      EmailId: {
        title: 'Email Id',
        type: 'string',
      },
      Address: {
        title: 'Address',
        type: 'string',
      },
      ProgramStudyChoice1: {
        title: 'Program Study Choice 1',
        type: 'string',
      },
      ProgramStudyChoice2: {
        title: 'Program Study Choice 2',
        type: 'string',
      },
      ProgramStudyChoice3: {
        title: 'Program Study Choice 3',
        type: 'string',
      },      
    },
  };
  source: LocalDataSource = new LocalDataSource();
  data;
  batchList: any[];
  ProgramStudyList:any[];

  constructor(private couservice: CounsellingService, service: BatchService,private Pservice:ProgramStudyService) {
    const data = this.couservice.getData();
    this.source.load(data);
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
