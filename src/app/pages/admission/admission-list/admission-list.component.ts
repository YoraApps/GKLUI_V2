import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AdmissionListService } from '../data/admission-list.service';

@Component({
  selector: 'ngx-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.scss'],
})
export class AdmissionListComponent {
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
      AdmissionNumber: {
        title: 'Admission Number',
        type: 'number',
      },
      FullName: {
        title: 'Full Name',
        type: 'string',
      },
      ProgramChoice1: {
        title: 'Program Choice 1',
        type: 'string',
      },
      ProgramChoice2: {
        title: 'Program Choice 2',
        type: 'string',
      },
      ProgramChoice3: {
        title: 'Program Choice 3',
        type: 'string',
      },
      FormStatus: {
        title: 'Form Status',
        type: 'string',
      },     
    },
  };
  IsList: boolean;
  batchList : any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AdmissionListService) {
    const data = this.service.getData();
    // this.IsList = false;
    this.source.load(data);
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

