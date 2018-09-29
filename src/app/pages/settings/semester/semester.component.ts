import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { SemesterService } from "../data/semester.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SemesterModelComponent } from './semester-model/semester-model.component';

@Component({
  selector: 'ngx-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {

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
      SemesterCode: {
        title: 'Semester Code',
        type: 'number',
      },
      SemesterName: {
        title: 'Semester Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data;
  dataArray: any = [];

  constructor(private service: SemesterService,private modalService: NgbModal) {

   }

   onClick() {
    const activeModal = this.modalService.open(SemesterModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

    onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      event.data.SetAction = 'DELETE';
      this.service.saveData(event.data);
      this.service.getData();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
    this.service.getData()
          .subscribe( data => {
            this.data = data.results;
            this.source.load(this.data);
          });
  }
  onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData); 
      event.newData.SetAction = 'UPDATE';     
      this.service.saveData(event.newData);
    } else {
      event.confirm.reject();
    }

   }
    onCreateConfirm(event): void {
      event.confirm.resolve(event.newData);
      event.newData.SetAction = 'INSERT';
    this.service.saveData(event.newData);
  }

}
