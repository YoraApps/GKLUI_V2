import { Component, OnInit } from '@angular/core';
import { BatchService } from '../../settings/data/batch.service';
import { ProgramService } from '../../settings/data/program.service';
import { ProgramBranchService } from '../../settings/data/program-branch.service';
import { BatchProgramService } from '../../settings/data/batch-program.service';
import { BranchSemesterService } from '../../settings/data/branch-semester-service';
import { SemesterCourseService } from '../../settings/data/semester-course.service';

@Component({
  selector: 'ngx-create-syllabus',
  templateUrl: './create-syllabus.component.html',
  styleUrls: ['./create-syllabus.component.scss']
})
export class CreateSyllabusComponent implements OnInit {

  constructor(  
    private batchService: BatchService,
    private programBranchService: ProgramBranchService,
    private batchprogramService: BatchProgramService,
    private branchSemesterService: BranchSemesterService,
    private semesterCourseService: SemesterCourseService,
  ) { }
   // //this.date = new Date();}
    date:any;
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
        
 }
}
