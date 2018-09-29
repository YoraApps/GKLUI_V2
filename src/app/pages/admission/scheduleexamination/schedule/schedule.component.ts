import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleExamModalService } from '../../data/scheduleexammodal.service';
import { LocalDataSource } from 'ng2-smart-table';
import { CourseService } from '../../../settings/data/course.service';
import { BatchService } from '../../../settings/data/batch.service';
import { ProgramStudyService } from '../../../settings/data/program-study.service';

@Component({
  selector: 'ngx-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {


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
    StudentName: {
      title: 'Student Name',
      type: 'string',
    },
    EmailId: {
      title: 'EmailId',
      type: 'string',
    },
    ExamName: {
      title: 'Exam Name',
      type: 'string',
    },
    ExaminationDate: {
      title: 'Examination Date',
      type: 'date',
    },
    StartTime: {
      title: 'Start Time',
      type: 'number',
    },
    EndTime: {
      title: 'End Time',
      type: 'number',
    },
    RoomName: {
      title: 'Room Name',
      type: 'string',
    },
    ExaminerName: {
      title: 'Examiner Name',
      type: 'string',
    },
    BatchName: {
      title: 'Batch Name',
      type: 'string',
    },
    ProgramStudyName: {
      title: 'Program Study Name',
      type: 'string',
    },
  },
};

source: LocalDataSource = new LocalDataSource();

data;

batchList: any[];
courseList: any[];
ProgramStudyList:any[];

constructor(private activeModal: NgbActiveModal,
  private ScheduleExamModal:ScheduleExamModalService,
  service: BatchService, _service: CourseService,
   private Pservice:ProgramStudyService) {
  const data = this.ScheduleExamModal.getData();
    this.source.load(data);
 }
 closeModal() {
  this.activeModal.close();
}

 onDeleteConfirm(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
}

ngOnInit() {

   this.Pservice.getData()
        .subscribe( data => {
          this.data = data.results;
          console.log(this.data);
          this.ProgramStudyList = this.data;
          console.log(this.ProgramStudyList);
        });
}
onClick(){}

}


