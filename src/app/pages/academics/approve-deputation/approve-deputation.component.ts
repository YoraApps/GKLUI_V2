import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { ApproveDeputationService } from "../data/approve-deputation.service";

@Component({
  selector: 'ngx-approve-deputation',
  templateUrl: './approve-deputation.component.html',
  styleUrls: ['./approve-deputation.component.scss']
})
export class ApproveDeputationComponent implements OnInit {

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
      FromDate: {
        title: 'From Date',
        type: 'date',
      },
       ToDate: {
        title: 'To Date',
        type: 'date',
      },
      	UniversityName: {
        title: 'University Name',
        type: 'string',
      },
       Remarks: {
        title: 'Remarks',
        type: 'string',
      },
      	Status: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: ApproveDeputationService) {
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
