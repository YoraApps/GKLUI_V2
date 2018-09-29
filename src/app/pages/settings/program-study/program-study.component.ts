import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ProgramStudyService } from '../data/program-study.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProgramStudyModelComponent } from './program-study-model/program-study-model.component';

@Component({
  selector: 'ngx-program-study',
  templateUrl: './program-study.component.html',
  styleUrls: ['./program-study.component.scss'],
})
export class ProgramStudyComponent implements OnInit {
 

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
      ProgramStudyCode: {
        title: 'Program Study Code',
        type: 'number',
      },
      ProgramStudyName: {
        title: 'Program Study Name',
        type: 'string',
      },
      AcademicTerm: {
        title: 'Academic Term',
        type: 'string',
      },
       SKS: {
        title: 'SKS',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  data;
   dataArray: any = [];


  constructor(private service: ProgramStudyService,private modalService: NgbModal) {
   
   }

   onClick() {
    const activeModal = this.modalService.open(ProgramStudyModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      if (event.data.ProgramStudyId != null) {
        this.service.removeData(event.data.ProgramStudyId);
      }
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
      this.service.saveData(event.newData);
    } else {
      event.confirm.reject();
    }

   }

    onCreateConfirm(event): void {
      event.confirm.resolve(event.newData);
    this.service.saveData(event.newData);
  }
}
