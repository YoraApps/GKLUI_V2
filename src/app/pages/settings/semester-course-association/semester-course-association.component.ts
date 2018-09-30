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
import { BranchSemesterService } from '../data/branch-semester-service';

@Component({
  selector: 'ngx-semester-course-association',
  templateUrl: './semester-course-association.component.html',
  styleUrls: ['./semester-course-association.component.scss']
})
export class SemesterCourseAssociationComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private batchService: BatchService,
    private programService: ProgramService,
    private courseservice: CourseService,
    private service: SemesterService,
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
  SemesterId: number = 0;
  semestercourseMappedList = [];
  BranchId: number = 0;
  SemesterIds: string;
  selBrcArr = [];
  objBrc = {};

  ngOnInit() {
    debugger
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
    this.SemesterId = id;
  }

  getCourseGrid() {
    debugger
    if (this.SemesterId > 0) {
      this.semesterCourseService.getMappedSemesterByCourse(this.SemesterId)
      .subscribe(data => {
        this.semestercourseMappedList = data.results;
      })
      this.isdatathere = true;
    }
  }

  IscheckedSemesters(obj) {
    debugger
    if (obj.IsSelected == true) {
      this.SemesterId = obj.BranchId;
      this.selBrcArr.push(this.SemesterId);
    }
    else if (obj.IsSelected == false) {
      var array = this.selBrcArr;
      this.selBrcArr.forEach(function (value, key) {
        console.log(value);
        if (value == obj.BranchId) {
          array.splice(key, 1);
        }
      });
      this.selBrcArr = array;
    }
    this.SemesterIds = this.selBrcArr.toString();
  }

  removeSemesterfrmMapping() {
    this.objBrc = {};
    this.objBrc = {
      "SetAction": "DELETE",
      "SemesterIds": this.SemesterIds,
      "CourseId": this.CourseId
    }
    this.semesterCourseService.AssignOrRemoveCourse(this.objBrc);
    this.semesterselOnChange(this.SemesterId);
  }



  onClick() {
    const activeModal = this.modalService.open(SemesterCourseModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

}
