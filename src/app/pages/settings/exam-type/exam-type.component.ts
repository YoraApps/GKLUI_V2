import { Component, OnInit } from '@angular/core';
import { ExamTypeService } from '../data/exam-type.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExamTypeModelComponent } from './exam-type-model/exam-type-model.component';

@Component({
  selector: 'ngx-exam-type',
  templateUrl: './exam-type.component.html',
  styleUrls: ['./exam-type.component.scss'],
})
export class ExamTypeComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
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
      ExamGroup: {
        title: 'Exam Group',
        type: 'string',
      },
      ExamName: {
        title: 'Exam Name',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  data;
  SetAction: string;
  dataArray: any = {};
  UniversityId: number = 1;
  
  constructor(private service: ExamTypeService,private modalService: NgbModal) {

   }

   onClick() {
    const activeModal = this.modalService.open(ExamTypeModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      if (event.data.ExaminationTypeId != null) {
        this.service.removeData(event.data.ExaminationTypeId);
      }
    } else {
      event.confirm.reject();
    }
  } 
  onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      this.service.saveData(event.newData);
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event): void {
    event.confirm.resolve(event.newData);  
    this.service.saveData(event.newData);
  }

  ngOnInit() {
    this.service.getData(this.UniversityId)
          .subscribe( data => {
            this.data = data.results;
            this.source.load(this.data);
          });
      }

}
