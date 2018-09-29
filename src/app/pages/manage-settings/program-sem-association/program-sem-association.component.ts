import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ProgramSemAssociationService } from '../data/program-sem-association.service';

@Component({
  selector: 'ngx-program-sem-association',
  templateUrl: './program-sem-association.component.html',
  styleUrls: ['./program-sem-association.component.scss'],
})
export class ProgramSemAssociationComponent implements OnInit {

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
      SemesterCode: {
        title: 'Semester Code',
        type: 'number',
      },
      SemesterName: {
        title: 'Semester Name ',
        type: 'string',
      },
      SKS: {
        title: 'SKS',
        type: 'number',
      },
    },
  };
  feessettings = {
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
      FeeLabel: {
        title: 'Fee Label',
        type: 'string',
      },
      Amount: {
        title: 'Amount',
        type: 'number',
      },
      FeeType: {
        title: 'Fee Type',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
    },
  };
  batchList: any;
  courseList: any;
  source: LocalDataSource = new LocalDataSource();
  _source: LocalDataSource = new LocalDataSource();
  constructor(private service: ProgramSemAssociationService) {
    const data = this.service.getData();
    const data1 = this.service.getData1();
    this.source.load(data);
    this._source.load(data1);
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
