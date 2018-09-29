import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { GradeService } from '../data/grade.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GradeModelComponent } from './grade-model/grade-model.component';

@Component({
  selector: 'ngx-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent implements OnInit {

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
      GradeName: {
        title: 'Grade Name',
        type: 'string',
      },
       Percentage: {
        title: 'Percentage',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
      data;
      SetAction: string;
      dataArray: any = [];

  constructor(private service: GradeService,private modalService: NgbModal) {
    
   }

   onClick() {
    const activeModal = this.modalService.open(GradeModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }


   onDeleteConfirm(event): void {
     debugger
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      event.data.SetAction = 'REMOVE';
      this.service.removeData(event.data);
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
