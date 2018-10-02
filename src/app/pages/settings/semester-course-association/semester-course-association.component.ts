import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BatchService } from '../data/batch.service';
import { SemesterCourseService } from '../data/semester-course.service';
import { BatchProgramService } from '../data/batch-program.service';
import { SemesterCourseModelComponent } from './semester-course-model/semester-course-model.component';
import { ProgramBranchService } from '../data/program-branch.service';
import { BranchSemesterService } from '../data/branch-semester-service';

@Component({
  selector: 'ngx-semester-course-association',
  templateUrl: './semester-course-association.component.html',
  styleUrls: ['./semester-course-association.component.scss']
})
export class SemesterCourseAssociationComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private batchService: BatchService,
    private programBranchService: ProgramBranchService,
    private batchprogramService: BatchProgramService,
    private branchSemesterService: BranchSemesterService,
    private semesterCourseService: SemesterCourseService,
  ) { }

  getMappedSemesterByBranch = [];
  progarmBranchMappedList = [];
  batchProgramMappedList = [];
  branchSemesterMappedList = [];
  activeBatchList: any[];
  programList: any[];
  CourseList: any[];
  semesterList: any[];
  isdatathere: boolean;
  batchId: number = 0;
  ProgramId: number = 0;
  CourseId: number = 0;
  semesterId: number = 0;
  semestercourseMappedList = [];
  BranchId: number = 0;
  CourseIds: string;
  selBrcArr = [];
  objBrc = {};
  selectobj = {};
  selectProgramobj = {};
  selectBranchobj = {};
  selectSemesterobj = {};
  IsSelected = {};
  
  ngOnInit() {
    this.batchService.getActiveBatches()
      .subscribe(data => {
        this.activeBatchList = data.results;
      });
  }

  batchselOnChange(id) {
    this.batchId = id;
    this.batchprogramService.getMappedProgramByBatch(this.batchId)
      .subscribe(data => {
        this.batchProgramMappedList = data.results;

      })
  }
  programselOnChange(id) {
    this.ProgramId = id;
    this.programBranchService.getMappedBranchByProgram(this.ProgramId)
      .subscribe(data => {
        this.progarmBranchMappedList = data.results;
      })
  }
  branchselOnChange(id) {
    debugger
    this.BranchId = id;
    this.branchSemesterService.getMappedSemesterByBranch(this.BranchId)
      .subscribe(data => {
        this.branchSemesterMappedList = data.results;
      })
  }
  semesterselOnChange(id) {
    this.semesterId = id;
  }

  getCourseGrid() {
      this.semesterCourseService.getMappedSemesterByCourse(this.semesterId)
      .subscribe(data => {
        this.semestercourseMappedList = data.results;
      })
      if(this.semestercourseMappedList.length > 0){
        this.isdatathere = true;
      }    
  }

  IscheckedSemesters(obj) {
    debugger
    this.CourseIds = '';
    if (obj.IsSelected == true) {
      this.CourseIds = obj.CourseId;
      this.selBrcArr.push(this.CourseIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selBrcArr;
      this.selBrcArr.forEach(function (value, key) {
        console.log(value);
        if (value == obj.CourseId) {
          array.splice(key, 1);
        }
      });
      this.selBrcArr = array;
    }
    this.CourseIds = this.selBrcArr.toString();
  }

  removeSemesterfrmMapping() {
    if(this.CourseIds!=null){
    this.objBrc = {};
    this.objBrc = {
      "SetAction": "DELETE",
      "SemesterId": this.semesterId,
      "CourseIds": this.CourseIds
    }
    this.semesterCourseService.AssignOrRemoveCourse(this.objBrc)
    .subscribe(data => {
      this.semestercourseMappedList = data.results; 
      this.CourseIds = '';
      this.selBrcArr = []; 
    })
  }
  else{
    window.confirm('Please Select a Course')
  }
  }


  onClick() {
    debugger
    if(this.semesterId > 0){
    const activeModal = this.modalService.open(SemesterCourseModelComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.semesterId = this.semesterId;

    activeModal.componentInstance.emitService.subscribe((emmitedValue) => {
      console.log(emmitedValue);
      this.semestercourseMappedList = emmitedValue;
    });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
  else{
    window.confirm('Please Select a Semester')
  }

}
}
