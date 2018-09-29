import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MemoCircularNoticeService } from '../data/memo-circular-notice.service';

@Component({
  selector: 'ngx-memo-circular-notice',
  templateUrl: './memo-circular-notice.component.html',
  styleUrls: ['./memo-circular-notice.component.scss'],
})
export class MemoCircularNoticeComponent implements OnInit {

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
      Title: {
        title: 'Title',
        type: 'string',
      },
       PublishedDate: {
        title: 'Published Date',
        type: 'string',
      },
      Type: {
        title: 'Type',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: MemoCircularNoticeService) {
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

