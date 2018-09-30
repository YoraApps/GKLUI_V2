import { Component, OnInit } from '@angular/core';
import { CourseChapterService } from '../data/course-chapter.service';
import { BatchService } from '../data/batch.service';
import { ProgramService } from '../data/program.service';
import { BranchService } from '../data/branch.service';
import { BatchProgramService } from '../data/batch-program.service';
import { ProgramBranchService } from '../data/program-branch.service';
import { BranchSemesterService } from '../data/branch-semester-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseChapterModelComponent } from './course-chapter-model/course-chapter-model.component';

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
    private batchprogramService: BatchProgramService,
    private programBranchService: ProgramBranchService,
    private branchSemesterService: BranchSemesterService,
    private modalService: NgbModal,

  ) { }
  activeBatchList = [];
  programList = [];
  branchList = [];
  batchId: number = 0;
  isdatathere: boolean;
  ProgramId: number = 0;
  SemesterId: number = 0;
  batchProgramMappedList = [];
  programbranchMappedList = [];
  branchSemesterMappedList = [];
  public data: any

  ngOnInit() {
      this.batchService.getActiveBatches()
      .subscribe(data => {
        this.activeBatchList = data.results;
      });
      this.programService.getData()
      .subscribe(data => {
        this.programList = data.results;
      });
      this.branchService.getData()
      .subscribe(data => {
        this.branchList = data.results;
      });
  }

  batchselOnChange(id) {
    this.batchId = id;
    this.batchprogramService.getMappedProgramByBatch(this.batchId)
    .subscribe(data => {
      this.batchProgramMappedList = data.results;
    
    })
  }
  programselOnChange(Obj) {
    this.programBranchService.getMappedBranchByProgram(Obj)
      .subscribe(data => {
        this.programbranchMappedList = data.results;
      })
  }
  branchselOnChange(Obj) {
    this.branchSemesterService.getMappedSemesterByBranch(Obj)
      .subscribe(data => {
        this.branchSemesterMappedList = data.results;
      })
  }
  getCourseGrid() {
    debugger
    if (this.branchSemesterMappedList.length > 0) {
      this.isdatathere = true;
    }
  }
  onClick() {
    const activeModal = this.modalService.open(CourseChapterModelComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

}
