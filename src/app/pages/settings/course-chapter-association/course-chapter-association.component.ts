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
  CourseIds: string;
  batchProgramMappedList = [];
  programbranchMappedList = [];
  branchSemesterMappedList = [];
  semestercourseMappedList = [];
  courseChapterMappedList = [];
  selCouArr = [];
  objCou = {};
  public data: any

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
  programselOnChange(Id) {
    this.ProgramId=Id;
    this.programBranchService.getMappedBranchByProgram(this.ProgramId)
      .subscribe(data => {
        this.programbranchMappedList = data.results;
      })
    if(this.ProgramId > 0){
    this.programBranchService.setSelectedProgramId(this.ProgramId);
    }
  }
  
  branchselOnChange(Id) {
    this.BranchId=Id;
    this.branchSemesterService.getMappedSemesterByBranch(this.BranchId)
      .subscribe(data => {
        this.branchSemesterMappedList = data.results;
      })
      if(this.BranchId > 0){
        // this.branchSemesterService.setSelectedBranchId(this.BranchId);
      }
  }

  // semesterselOnChange(Id) {
  //   this.SemesterId=Id;
  //   this.semesterCourseService.getMappedSemesterByCourse(this.SemesterId)
  //   .subscribe(data => {
  //     this.semestercourseMappedList = data.results;
  //   })
  //   if(this.SemesterId > 0){
  //     this.semesterCourseService.setSelectedSemesterId(this.SemesterId);
  //   }
  // }

  courseselOnChange(Id) {
    this.CourseId=Id;
    this.courseChapterService.getMappedChapterByCourse(this.CourseId)
    .subscribe(data => {
      this.courseChapterMappedList = data.results;
    })
    if(this.CourseId > 0){
      this.courseChapterService.setSelectedCourseId(this.CourseId);
    }
  }

  
  getCourseGrid() {
    debugger
    if (this.courseChapterMappedList.length > 0 && this.SemesterId >  0) {
      this.isdatathere = true;
    }
  }

  IscheckedCourses(obj){
    debugger
    if(obj.IsSelected == true) {
      this.CourseIds = obj.CourseId;
      this.selCouArr.push(this.CourseIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selCouArr;
      this.selCouArr.forEach(function (value,key) {
        console.log(value);
        if(value == obj.CourseId){
          array.splice(key, 1);
        }
      }); 
      this.selCouArr = array;
    }
    this.CourseIds = this.selCouArr.toString();   
  }
  removeCoursefrmMapping() {
    this.objCou  = {};
    this.objCou = {
      "SetAction":"DELETE",
      "CourseIds":this.CourseIds,
      "CourseId":this.CourseId
    }
    this.courseChapterService.AssignOrRemoveCourse(this.objCou);
    this.programselOnChange(this.CourseId);
  }
  onClick() {
    const activeModal = this.modalService.open(CourseChapterModelComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

}
