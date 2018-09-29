import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ManageCourseService } from '../data/manage-course.service';
@Component({
  selector: 'ngx-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {
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
      SubjectCode : {
        title: 'Subject Code',
        type: 'string',
      },
      SubjectName: {
        title: 'Subject Name',
        type: 'string',
      },
      TeachingType: {
        title: 'Teaching Type',
        type: 'string',
      },
      Teacher: {
        title: 'Teacher',
        type: 'string',
      },
      Periods: {
        title: 'Periods',
        type: 'number',
      },
      SKS: {
        title: 'SKS',
        type: 'number',
      },
    },
  };
  chaptersettings = {
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
      ChapterNumber : {
        title: 'Chapter Numbe',
        type: 'string',
      },
      ChapterTitle: {
        title: 'Chapter Title',
        type: 'string',
      },
      ModeofTeaching: {
        title: 'Mode of Teaching',
        type: 'string',
      },
      ChapterDetails	: {
        title: 'Chapter Details	',
        type: 'string',
      },
    },
  }; 
  ProgramStudyList: any;
  semisterList: any; 
  batchList :any;
  source: LocalDataSource = new LocalDataSource();
  _source: LocalDataSource = new LocalDataSource();
  constructor(private service: ManageCourseService) {
    const data = this.service.getData();
    this.source.load(data);
    const data1 = this.service.getData1();
    this._source.load(data1);
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
