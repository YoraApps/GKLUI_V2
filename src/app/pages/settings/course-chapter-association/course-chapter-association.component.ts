import { Component, OnInit } from '@angular/core';
import { CourseChapterService } from '../data/course-chapter.service';
import { BatchService } from '../data/batch.service';
import { BatchProgramService } from '../data/batch-program.service';
import { ProgramBranchService } from '../data/program-branch.service';
import { BranchSemesterService } from '../data/branch-semester-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseChapterModelComponent } from './course-chapter-model/course-chapter-model.component';
import { SemesterCourseService } from '../data/semester-course.service';

@Component({
  selector: 'ngx-course-chapter-association',
  templateUrl: './course-chapter-association.component.html',
  styleUrls: ['./course-chapter-association.component.scss']
})
export class CourseChapterAssociationComponent implements OnInit {

  constructor(private courseChapterService: CourseChapterService,
    private batchService: BatchService,
    private batchprogramService: BatchProgramService,
    private programBranchService: ProgramBranchService,
    private branchSemesterService: BranchSemesterService,
    private semesterCourseService: SemesterCourseService,
    private modalService: NgbModal,

  ) { }
  activeBatchList = [];
  batchId: number = 0;
  isdatathere: boolean;
  ProgramId: number = 0;
  BranchId: number = 0;
  SemesterId: number = 0;
  CourseId: number = 0;
  ChapterIds: string;
  batchProgramMappedList = [];
  progarmBranchMappedList = [];
  branchSemesterMappedList = [];
  semestercourseMappedList = [];
  courseChapterMappedList = [];
  programList = [];
  branchList = [];
  semesterList = [];
  courseList = [];
  selCouArr = [];
  objCou = {};
  selectobj = {};
  selectProgramobj = {};
  selectobjBranch = {};
  selectSemesterobj = {};
  selectcourseobj = {};

  ngOnInit() {
    this.batchService.getActiveBatches()
      .subscribe(data => {
        this.activeBatchList = data.results;
      });
  }

  batchselOnChange(id) {
    debugger
    this.batchId = id;
    this.batchprogramService.getMappedProgramByBatch(this.batchId)
      .subscribe(data => {
        this.batchProgramMappedList = data.results;

      })
  }
  programselOnChange(Id) {
    debugger
    this.ProgramId = Id;
    this.programBranchService.getMappedBranchByProgram(this.ProgramId)
      .subscribe(data => {
        this.progarmBranchMappedList = data.results;
      })
  }

  branchselOnChange(Id) {
    this.BranchId = Id;
    this.branchSemesterService.getMappedSemesterByBranch(this.BranchId)
      .subscribe(data => {
        this.branchSemesterMappedList = data.results;
      })
  }

  semesterselOnChange(Id) {
    debugger
    this.SemesterId = Id;
    this.semesterCourseService.getMappedSemesterByCourse(this.SemesterId)
      .subscribe(data => {
        this.semestercourseMappedList = data.results;
      })
  }
  courseselOnChange(Id) {
    this.CourseId = Id;
  }

  getChaptereGrid() {
    this.courseChapterService.getMappedChapterByCourse(this.CourseId)
      .subscribe(data => {
        this.courseChapterMappedList = data.results;
      })
    if (this.courseChapterMappedList.length > 0) {
      this.isdatathere = true;
    }

  }

  IscheckedChapters(obj) {
    debugger
    this.ChapterIds = '';
    if (obj.IsSelected == true) {
      this.ChapterIds = obj.ChapterId;
      this.selCouArr.push(this.ChapterIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selCouArr;
      this.selCouArr.forEach(function (value, key) {
        console.log(value);
        if (value == obj.ChapterId) {
          array.splice(key, 1);
        }
      });
      this.selCouArr = array;
    }
    this.ChapterIds = this.selCouArr.toString();
  }
  removeCoursefrmMapping() {
    if(this.ChapterIds!=null){
    this.objCou = {};
    this.objCou = {
      "SetAction": "DELETE",
      "CourseId": this.CourseId,
      "ChapterIds": this.ChapterIds
    }
    this.courseChapterService.AssignOrRemoveCourse(this.objCou)
      .subscribe(data => {
        this.courseChapterMappedList = data.results;
        this.ChapterIds = '';
        this.selCouArr = [];
      })
  }
  else{
    window.confirm('Please Select a Chapter')
  }
}
  onClick() {
    debugger
    if (this.CourseId > 0) {
      const activeModal = this.modalService.open(CourseChapterModelComponent, { size: 'lg', container: 'nb-layout' });
      activeModal.componentInstance.CourseId = this.CourseId;

      activeModal.componentInstance.emitService.subscribe((emmitedValue) => {
        console.log(emmitedValue);
        this.courseChapterMappedList = emmitedValue;
      });
      activeModal.componentInstance.modalHeader = 'Large Modal';
    }
    else {
      window.confirm('Please Select a Course')
    }
  }
}
