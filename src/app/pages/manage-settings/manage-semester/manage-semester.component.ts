import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ManageSemesterService } from '../data/manage-semester.service';

@Component({
  selector: 'ngx-manage-semester',
  templateUrl: './manage-semester.component.html',
  styleUrls: ['./manage-semester.component.scss']
})
export class ManageSemesterComponent implements OnInit {
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
        type: 'number',
      },
      StudentName: {
        title: 'Student Name',
        type: 'string',
      },
      EmailId: {
        title: 'Email Id',
        type: 'number',
      },
      ContactNumber: {
        title: 'Contact Number',
        type: 'string',
      },
      JoiningDate: {
        title: 'Joining Date',
        type: 'number',
      },
    },
  };
  batchList: any;
  ProgramStudyList:any;
  semisterList: any;
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: ManageSemesterService) {
    const data = this.service.getData();
    this.source.load(data);
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

