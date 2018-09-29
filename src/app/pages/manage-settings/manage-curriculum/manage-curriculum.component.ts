import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ManageCurriculumService } from '../data/manage-curriculum.service';

@Component({
  selector: 'ngx-manage-curriculum',
  templateUrl: './manage-curriculum.component.html',
  styleUrls: ['./manage-curriculum.component.scss']
})
export class ManageCurriculumComponent implements OnInit {
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
      CourseCode: {
        title: 'Course Code',
        type: 'string',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
      CourseType: {
        title: 'Course Type',
        type: 'string',
      },
      PrerequisiteCourse: {
        title: 'Prerequisite Course',
        type: 'string',
      },
      SKS: {
        title: 'SKS',
        type: 'number',
      },
    },
  };
  semisterList:any;
  batchList:any;
  ProgramStudyList: any;
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: ManageCurriculumService) {
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
