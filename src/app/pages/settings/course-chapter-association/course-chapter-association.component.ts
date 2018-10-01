import { Component, OnInit } from '@angular/core';
import { CourseChapterService } from '../data/course-chapter.service';
import { BatchService } from '../data/batch.service';
import { BatchProgramService } from '../data/batch-program.service';
import { ProgramBranchService } from '../data/program-branch.service';
import { BranchSemesterService } from '../data/branch-semester-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseChapterModelComponent } from './course-chapter-model/course-chapter-model.component';
import { SemesterCourseService } from '../data/semester-course.service';
import { ProgramService } from '../data/program.service';
import { CourseService } from '../data/course.service';
import { SemesterService } from '../data/semester.service';
import { BranchService } from '../data/branch.service';

@Component({
  selector: 'ngx-course-chapter-association',
  templateUrl: './course-chapter-association.component.html',
  styleUrls: ['./course-chapter-association.component.scss']
})
export class CourseChapterAssociationComponent implements OnInit {

  constructor(private courseChapterService: CourseChapterService,
    private batchService: BatchService,
    private programService: ProgramService,
    private branchService: BranchService,
    private courseservice: CourseService,
    private semesterService: SemesterService,
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
  programList =[];
  branchList =[];
  semesterList = [];
  courseList = [];
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
    debugger
    this.batchId = id;
    this.batchprogramService.getMappedProgramByBatch(this.batchId)
    .subscribe(data => {
      this.batchProgramMappedList = data.results;
    
    })
  }
  programselOnChange(Id) {
    debugger
    this.ProgramId=Id;
    this.programBranchService.getMappedBranchByProgram(this.ProgramId)
      .subscribe(data => {
        this.programbranchMappedList = data.results;
      })   
  }
  
  branchselOnChange(Id) {
    this.BranchId=Id;
    this.branchSemesterService.getMappedSemesterByBranch(this.BranchId)
      .subscribe(data => {
        this.branchSemesterMappedList = data.results;
      })    
  }

  semesterselOnChange(Id) {
    debugger
    this.SemesterId=Id;
    this.semesterCourseService.getMappedSemesterByCourse(this.SemesterId)
    .subscribe(data => {
      this.semestercourseMappedList = data.results;
    })
 
  }

  courseselOnChange(Id) {
    this.CourseId=Id;
    
  }

  
  getCourseGrid() {
    debugger
    if (this.CourseId >  0) {
      this.courseChapterService.getMappedChapterByCourse(this.CourseId)
      .subscribe(data => {
        this.courseChapterMappedList = data.results;
      })
      if(this.courseChapterMappedList.length>0){
      this.isdatathere = true;
      }
    }
  }

  IscheckedChapters(obj){
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
    this.courseChapterService.AssignOrRemoveCourse(this.objCou)
    .subscribe(data=>{ 
      this.courseChapterMappedList = data.results;
    })
  }
  onClick() {
    if(this.CourseId > 0){
      const activeModal = this.modalService.open(CourseChapterModelComponent, { size: 'lg', container: 'nb-layout'});

      activeModal.componentInstance.CourseId = this.CourseId;

      activeModal.componentInstance.emitService.subscribe((emmitedValue) => {
        console.log(emmitedValue);
        this.courseChapterMappedList = emmitedValue;
      });
      activeModal.componentInstance.modalHeader = 'Large Modal';
    }
    else{
      window.confirm('Please Select a Course')
    }
  }
}
