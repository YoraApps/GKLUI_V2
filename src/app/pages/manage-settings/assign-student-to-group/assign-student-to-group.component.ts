import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AssignStudentToGroupService } from '../data/assign-student-to-group.service';

@Component({
  selector: 'ngx-assign-student-to-group',
  templateUrl: './assign-student-to-group.component.html',
  styleUrls: ['./assign-student-to-group.component.scss']
})
export class AssignStudentToGroupComponent implements OnInit {
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
        type: 'string',
      },
    },
  };
  batchList: any;
  ProgramStudyList: any;
  semisterList: any;
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: AssignStudentToGroupService) {
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

