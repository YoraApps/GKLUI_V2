import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BatchService } from '../data/batch.service';
import { ProgramService } from '../data/program.service';
import { SemesterCourseService } from '../data/semester-course.service';
import { BatchProgramService } from '../data/batch-program.service';
import { SemesterCourseModelComponent } from './semester-course-model/semester-course-model.component';
import { CourseService } from '../data/course.service';
import { SemesterService } from '../data/semester.service';
import { ProgramBranchService } from '../data/program-branch.service';

@Component({
  selector: 'ngx-semester-course-association',
  templateUrl: './semester-course-association.component.html',
  styleUrls: ['./semester-course-association.component.scss']
})
export class SemesterCourseAssociationComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private batchService : BatchService,
    private programService:ProgramService,
    private courseservice: CourseService,
    private service: SemesterService,
    private programBranchService: ProgramBranchService,
    private batchprogramService: BatchProgramService,
    private semesterCourseService:SemesterCourseService,
    ) { }

    
    activeBatchList:any[];
    programList:any[];
    activeCourseList:any[];
    semesterList:any[];
    isdatathere: boolean;
    SemesterId: number =0;
    semestercourseMappedList = [];

  ngOnInit() {
    this.batchService.getActiveBatches()
    .subscribe(data => {
      this.activeBatchList = data.results;
    }); 

    this.programService.getData()
    .subscribe(data => {
      this.programList = data.results;
    });

    this.courseservice.getData()
    .subscribe(data => {    
      this.activeCourseList = data.results;
    });

    this.service.getData()
    .subscribe(data => {    
      this.semesterList = data.results;
    });
  }
  batchselOnChange(id) {
    this.SemesterId = id;
    this.semesterCourseService.getMappedSemesterByCourse(this.SemesterId)
    .subscribe(data => {
      this.semestercourseMappedList = data.results;
    
    })
  }
  programselOnChange(Obj) {
    this.programBranchService.getMappedBranchByProgram(Obj)
      .subscribe(data => {
        this.semestercourseMappedList = data.results;
      })
  }
  courseselOnChange(Obj) {
    this.semesterCourseService.getMappedSemesterByCourse(Obj)
      .subscribe(data => {
        this.semestercourseMappedList = data.results;
      })
  }
  semesterselOnChange(Obj) {
    this.semesterCourseService.getMappedSemesterByCourse(Obj)
      .subscribe(data => {
        this.semestercourseMappedList = data.results;
      })
  }

  getCourseGrid() {
    if(this.semestercourseMappedList.length > 0 && this.SemesterId > 0){
      this.isdatathere = true;
    }
  }
  


  

  onClick() {
    const activeModal = this.modalService.open(SemesterCourseModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

}
