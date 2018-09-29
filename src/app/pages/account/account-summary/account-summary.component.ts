import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AccountSummaryService } from '../data/account-summary.service';

@Component({
  selector: 'ngx-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {

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
      DocumentNumber: {
        title: 'Document Number',
        type: 'number',
      },
      DocumentType: {
        title: 'Document Type',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
      PostedDate: {
        title: 'Posted Date',
        type: 'date',
      },
      Status: {
        title: 'Status',
        type: 'string',
      },
      Month: {
        title:  'Month',
        type: 'string',
      },
      Year: {
        title: 	'Year',
        type: 'date',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: AccountSummaryService) {
    const data = this.service.getData1();
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
