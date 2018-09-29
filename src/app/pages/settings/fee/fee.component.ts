import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FeeService } from '../data/fee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeeModelComponent } from './fee-model/fee-model.component';

@Component({
  selector: 'ngx-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.scss'],
})
export class FeeComponent implements OnInit {

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
      FeeLabel: {
        title: 'Fee Label',
        type: 'string',
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

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: FeeService,private modalService: NgbModal) {
    const data = this.service.getData();
    this.source.load(data);
   }

   onClick() {
    const activeModal = this.modalService.open(FeeModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
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
