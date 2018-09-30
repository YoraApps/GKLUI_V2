import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CourseService } from '../../../pages/settings/data/course.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseModalComponent } from './course-modal/course-modal.component';
@Component({
  selector: 'ngx-course',
  templateUrl: './course.component.html',
  styles: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
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
      CourseCode: {
        title: 'Course Code',
        type: 'string',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
      Active: {
        title: 'IsActive',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Active',
            false: 'InActive',
            resetText: 'clear',
          },
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data;
  CourseList:any[];
  CourseTypeList:any[];
  selectobj: {};
  CourseTypeId:number;

  constructor( private service: CourseService,private modalService: NgbModal) {
  }
  onClick() {
    const activeModal = this.modalService.open(CourseModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

  filterChanged(selectobj){
    console.log('value is ',selectobj);
    this.CourseTypeId=selectobj;
    this.service.getCourseType()
        .subscribe( data => {
          this.CourseList= data.results;
    });
  }

  getcourseGrid(selectobj){
    console.log('grid ',selectobj);
    if (selectobj!= null) {      
    this.service.getData()
    .subscribe( data => {
      this.data = data.results;
      this.source.load(this.data);
    });
  }
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
    debugger
    this.service.getCourseType()
    .subscribe(data => {
      this.CourseList = data.results;
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
     if(this.CourseTypeId > 0){
      event.confirm.resolve(event.newData);
      event.newData.CourseTypeId = this.CourseTypeId;
      event.newData.SetAction = 'INSERT';
      this.service.saveData(event.newData);
     }
     else{
      window.confirm('Please Select Course Type!')
     }
   
 }

}

