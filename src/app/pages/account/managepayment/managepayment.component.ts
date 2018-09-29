import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ManagepaymentService } from '../data/managepayment.service';

@Component({
  selector: 'ngx-managepayment',
  templateUrl: './managepayment.component.html',
  styleUrls: ['./managepayment.component.scss'],
})
export class ManagepaymentComponent implements OnInit {

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
      Description: {
        title: 'Description',
        type: 'string',
      },
      PostedDate: {
        title: 'Posted Date',
        type: 'date',
      },
      Month: {
        title:  'Month',
        type: 'string',
      },
      Year: {
        title: 	'Year',
        type: 'date',
      },
       Amount: {
        title: 	'Amount',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: ManagepaymentService) {
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
