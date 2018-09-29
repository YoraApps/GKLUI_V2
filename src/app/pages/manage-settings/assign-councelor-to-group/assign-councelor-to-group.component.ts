import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AssignCouncelorToGroupService } from '../data/assign-councelor-to-group.service';

@Component({
  selector: 'ngx-assign-councelor-to-group',
  templateUrl: './assign-councelor-to-group.component.html',
  styleUrls: ['./assign-councelor-to-group.component.scss']
})
export class AssignCouncelorToGroupComponent implements OnInit {
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
      GroupCode: {
        title: 'Group Code',
        type: 'number',
      },
      GroupName: {
        title: 'Group Name',
        type: 'string',
      },
      EmployeeNumber: {
        title: 'Employee Number',
        type: 'number',
      },
      EmployeeName:{
        title: 'Employee Name',
        type: 'string',
      },
      AssignedBy:{
        title: 'Assigned By',
        type: 'string',
      },
    },
  };
  semisterList:any;
  batchList:any;
  ProgramStudyList: any;
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: AssignCouncelorToGroupService) {
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


