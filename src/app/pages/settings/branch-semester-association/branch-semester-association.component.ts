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
  branchId: number = 0;
  programId: number = 0;
  SemesterId: number = 0;
  IsSelected = false;
  objSem = {};
  selSemList = [];
  SemesterIds: string = '';
  selSemArr = [];
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

  programselOnChange(data) {
    this.programId = data;
    this.programBranchService.getMappedBranchByProgram(this.programId)
      .subscribe(data => {
        this.programbranchMappedList = data.results;
      })
  }

  branchselOnChange(Obj) {
    this.branchId = Obj;
    this.branchSemesterService.getMappedSemesterByBranch(this.branchId)
      .subscribe(data => {
        this.branchSemesterMappedList = data.results;
      })
      if(this.branchId > 0){
        this.branchSemesterService.setSelectedBranchId(this.branchId);
        } 
  }
  
  getSemesterGrid() {
    debugger
    this.branchSemesterService.getMappedSemesterByBranch(this.branchId)
    .subscribe(data => {
      this.branchSemesterMappedList = data.results;
    
    })
    if (this.branchSemesterMappedList.length > 0 && this.branchId > 0) {
      this.isdatathere = true;
    }
  }

  IscheckedSemesters(obj){
    debugger
    if(obj.IsSelected == true) {
      this.SemesterIds = obj.SemesterId
      this.selSemArr.push(this.SemesterIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selSemArr;
      this.selSemArr.forEach(function (value,key) {
        console.log(value);
        if(value == obj.SemesterId){
          array.splice(key, 1);
        }
      }); 
      this.selSemArr = array;
    }
    this.SemesterIds = this.selSemArr.toString();
  }
  removeSemesterfrmMapping() {
    debugger
    this.objSem  = {};
    this.objSem = {
      "SetAction":"DELETE",
      "SemesterIds":this.SemesterIds,
      "BranchId":this.branchId
    }
    this.branchSemesterService.AssignOrRemoveSemester(this.objSem)
    .subscribe(data => {
      console.log(data.results); 
    })
    var array = this.branchSemesterMappedList
    this.branchSemesterMappedList.forEach(function (value,key) {
      console.log(value);
      if(value.IsSelected == true){
        array.splice(key, 1);
      }
    });
    this.branchSemesterMappedList = array;
  }

  getUpdatedList(dataList) {
    this.branchSemesterMappedList = dataList;
  }
  onClick() {
    if(this.branchId > 0){
    const activeModal = this.modalService.open(BranchSemesterModelComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
    activeModal.componentInstance.emitService.subscribe((emmitedValue) => {
      console.log(emmitedValue);
      this.branchSemesterMappedList = emmitedValue;
    });
  }

else{
  window.confirm('Please Select a Branch')
}
}
}
