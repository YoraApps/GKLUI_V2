import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../data/program.service';
import { BatchProgramService } from '../data/batch-program.service';
import { BatchService } from '../data/batch.service';
import { SemesterService } from '../data/semester.service';
import { BranchSemesterService } from '../data/branch-semester-service';
import { ProgramBranchService } from '../data/program-branch.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BranchSemesterModelComponent } from './branch-semester-model/branch-semester-model.component';
import { BranchService } from '../data/branch.service';

@Component({
  selector: 'ngx-branch-semester-association',
  templateUrl: './branch-semester-association.component.html',
  styleUrls: ['./branch-semester-association.component.scss']
})
export class BranchSemesterAssociationComponent implements OnInit {

  constructor(private branchSemesterService: BranchSemesterService,
     private branchService: BranchService,
     private programService: ProgramService,
     private batchprogramService: BatchProgramService,
     private modalService: NgbModal,
     private batchService: BatchService, 
     private programBranchService: ProgramBranchService) { }
  activeBatchList = [];
  batchProgramMappedList = [];
  programbranchMappedList = [];
  programList = [];
  branchList = []
  branchSemesterMappedList = [];
  isdatathere: boolean;
  batchId: number = 0;
  ProgramId: number = 0;
  SemesterId: number = 0;
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
  getSemesterGrid() {
    debugger
    if (this.branchSemesterMappedList.length > 0) {
      this.isdatathere = true;
    }
  }
  onClick() {
    const activeModal = this.modalService.open(BranchSemesterModelComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
}
