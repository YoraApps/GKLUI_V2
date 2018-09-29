import { Component, OnInit } from '@angular/core';
import { AcademicMasterService } from '../data/academic-master.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-academic-master',
  templateUrl: './academic-master.component.html',
  styleUrls: ['./academic-master.component.scss'],
})
export class AcademicMasterComponent implements OnInit {

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
      AcademicCode: {
        title: 'Academic Code',
        type: 'string',
      },
      AcademicYear: {
        title: 'Academic Year',
        type: 'number',
      },
      AcademicTerm: {
        title: 'Academic Term',
        type: 'string',
      },
      ResultType: {
        title: 'Result Type',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: AcademicMasterService) {
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
