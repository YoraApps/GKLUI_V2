import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { ReviewandApproveService } from '../data/reviewand-approve.service';
import { BatchService } from '../../settings/data/batch.service';
import { CourseService } from '../../settings/data/course.service';
import { ProgramStudyService } from '../../settings/data/program-study.service';
import { ModalComponent } from '../../ui-features/modals/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupService } from '../../settings/data/popup.service';

@Component({
  selector: 'ngx-button-view',
  template: `
  <a href=" " ><i (click)="onClick()" style="font-size:20px;height:30px;color:#4bd396" class="nb-compose"></i></a>
  <a href=" " ><i (click)="onClick()" style="font-size:25px;color:#4bd396;text-decoration:none;" class="nb-edit"></i></a>
  <a href=" " ><i (click)="onClick()" style="font-size:25px;color:#4bd396;text-decoration:none;" class="nb-checkmark"></i></a> 
    `,
})
export class ReviewButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input()
  value: string | number;
  @Input()
  rowData: any;

  @Output()
  save: EventEmitter<any> = new EventEmitter();

   ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }
  constructor(modalService: NgbModal) { }

  onClick() {
    this.save.emit(this.rowData);
  }
}

// @Component({
//   selector: 'ngx-button-view',
//   template: `
//     <button (click)="onClick()">{{ renderValue }}</button>
//   `,
// })
// export class ButtonViewComponent implements ViewCell, OnInit {
//   renderValue: string;

//   @Input() value: string | number;
//   @Input() rowData: any;

//   @Output() save: EventEmitter<any> = new EventEmitter();

//   ngOnInit() {
//     this.renderValue = this.value.toString().toUpperCase();
//   }

//   onClick() {
//     this.save.emit(this.rowData);
//   }
// }


@Component({
  selector: 'ngx-reviewand-approve',
  templateUrl: './reviewand-approve.component.html',
  styleUrls: ['./reviewand-approve.component.scss'],
})
export class ReviewandApproveComponent implements OnInit {

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
      ApplicationNumber: {
        title: 'Application Number',
        type: 'number',
      },
      FullName: {
        title: 'Full Name ',
        type: 'string',
      },
      Gender:{
        title: 'Gender ',
        type: 'string',
      },
      EmailId:{
        title: 'Email Id',
        type: 'string',
      },
      Address:{
        title: 'Address',
        type: 'string',
      },
      BatchName:{
        title: 'Batch Name',
        type: 'string',
      },
      ProgramStudyChoice1:{
        title: 'Program Study Choice 1',
        type: 'string',
      },
      ProgramStudyChoice2:{
        title: 'Program Study Choice 2',
        type: 'string',
      },
      ProgramStudyChoice3:{
        title: 'Program Study Choice3',
        type: 'string',
      },     
      DocumentStatus: {
        title: 'Document Status',
        type: 'string',
      },
      ApplicationStatus: {
        title: 'Application Status',
        type: 'string',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ReviewButtonViewComponent,
        onComponentInitFunction: instance => {
          instance.save.subscribe(row => {
            const activeModal = this.modalService.open(ModalComponent, {
              size: 'lg',
              container: 'nb-layout',
            });
            activeModal.componentInstance.modalHeader = 'Batch Details';
          });
        },
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  data;
  batchList: any[];
  courseList: any[];
  ProgramStudyList: any[];

  constructor(private Reservice: ReviewandApproveService, bservice: BatchService, 
  _service: CourseService, private pservice:ProgramStudyService,
  private modalService: NgbModal, private service: PopupService,)
   {
    const data = this.Reservice.getData();
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
      this.pservice.getData()
          .subscribe( data => {
            this.data = data.results;
            console.log(this.data);
            this.ProgramStudyList = this.data;
            console.log(this.ProgramStudyList);
          });
  }

}
