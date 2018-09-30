import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BatchService } from '../data/batch.service';
import { BatchModalComponent } from './batch-modal/batch-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss'],
})
export class BatchComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      AcademicYear : {
        title: 'Academic Year',
        type: 'string',
      },
    },
  };


  source: LocalDataSource = new LocalDataSource();
  data;
  SetAction: string;
  AcademicYearId:number=0;
  constructor(private service: BatchService,private modalService: NgbModal) {
  }  
  onClick() {
    const activeModal = this.modalService.open(BatchModalComponent, { size: 'sm', container: 'nb-layout' });

    //activeModal.componentInstance.modalHeader = 'Large Modal';
  }

   onDeleteConfirm(event): void {
     debugger
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      event.data.SetAction = 'DELETE';
      this.service.updateData(event.data);
      this.service.getData();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
    this.service.getAllBatch()
    .subscribe(data => {
      debugger
      this.data = data.results;
      this.source.load(this.data);
    });
  }

  onSaveConfirm(event): void {
    debugger
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      event.newData.SetAction = 'UPDATE';
      this.service.updateData(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    debugger
    event.confirm.resolve(event.newData);
    event.newData.SetAction = 'INSERT';
    this.service.updateData(event.newData);
  }

  getresBatchList()  {
   this.data = this.service.getresArray(); 
   this.source.load(this.data);
  }

}
