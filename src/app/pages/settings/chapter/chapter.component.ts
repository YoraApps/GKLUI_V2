import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../data/chapter.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChapterModelComponent } from './chapter-model/chapter-model.component';

@Component({
  selector: 'ngx-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {

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
      ChapterNumber: {
        title: 'Chapter Number',
        type: 'string',
      },
      ChapterTitle: {
        title: 'Chapter Title',
        type: 'string',
      },
      ModeOfTeaching: {
        title: 'Mode of Teaching',
        type: 'string',
      },
      ChapterDetails: {
        title: 'Chapter Details',
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

  constructor(private service: ChapterService,private modalService: NgbModal) {

   }
   onClick() {
    const activeModal = this.modalService.open(ChapterModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
       if (event.data.ChapterId != null) {
        this.service.removeData(event.data.ChapterId);
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
     debugger
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      console.log(event.newData);
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
