import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ManageFacultyDepartmentService } from '../data/manage-faculty-department.service';

@Component({
  selector: 'ngx-manage-faculty-department',
  templateUrl: './manage-faculty-department.component.html',
  styleUrls: ['./manage-faculty-department.component.scss']
})
export class ManageFacultyDepartmentComponent implements OnInit {

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
      ProgramStudyCode: {
        title: 'Program Study Code',
        type: 'number',
      },
      ProgramStudyName: {
        title: 'Program Study Name',
        type: 'string',
      },
    },
  };
  batchList:any;
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: ManageFacultyDepartmentService) {
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


