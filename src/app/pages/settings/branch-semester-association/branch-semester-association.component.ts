import { Component, OnInit } from '@angular/core';
import { BatchProgramService } from '../data/batch-program.service';
import { BatchService } from '../data/batch.service';
import { BranchSemesterService } from '../data/branch-semester-service';
import { ProgramBranchService } from '../data/program-branch.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BranchSemesterModelComponent } from './branch-semester-model/branch-semester-model.component';

@Component({
  selector: 'ngx-branch-semester-association',
  templateUrl: './branch-semester-association.component.html',
  styleUrls: ['./branch-semester-association.component.scss']
})
export class BranchSemesterAssociationComponent implements OnInit {

  constructor(private branchSemesterService: BranchSemesterService,  
     private batchprogramService: BatchProgramService,
     private modalService: NgbModal,
     private batchService: BatchService, 
     private programBranchService: ProgramBranchService) { }

  activeBatchList = []; 
  branchSemesterMappedList = [];
  batchProgramMappedList = [];
  programbranchMappedList = [];
  isdatathere: boolean;
  batchId: number = 0;
  branchId: number = 0;
  programId: number = 0;
  SemesterId: number = 0;
  objSem = {};
  SemesterIds: string ;
  selSemArr = [];
  selectobj ={};
  selectobjProgram ={};
  selectobjBranch = {};    

  ngOnInit() {
    this.onLoadBatchList();      
  }
  onLoadBatchList(){
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

  programselOnChange(data) {
    debugger
    this.programId = data;
    this.programBranchService.getMappedBranchByProgram(this.programId)
      .subscribe(data => {
        this.programbranchMappedList = data.results;
      })
  }

  branchselOnChange(id) {
    this.branchId = id;
  }  
  getSemesterGrid() {
    debugger
    this.branchSemesterService.getMappedSemesterByBranch(this.branchId)
    .subscribe(data => {
      this.branchSemesterMappedList = data.results;    
    })
    if (this.branchSemesterMappedList.length > 0) {
      this.isdatathere = true;
    }
  }

  IscheckedSemesters(obj){
    debugger
    this.SemesterIds = '';    
    if(obj.IsSelected == true) {
      this.SemesterIds = obj.SemesterId;
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
    if(this.SemesterIds!=null){
    this.objSem  = {};
    this.objSem = {
      "SetAction":"DELETE",
      "SemesterIds":this.SemesterIds,
      "BranchId":this.branchId
    }
    this.branchSemesterService.AssignOrRemoveSemester(this.objSem)
    .subscribe(data => {
      this.branchSemesterMappedList = data.results; 
      this.SemesterIds = '';
      this.selSemArr=[];
    })
  }
  else{
    window.confirm('Please Select a semester')
  }
}
  onClick() {
    if(this.branchId > 0){
    const activeModal = this.modalService.open(BranchSemesterModelComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.BranchId = this.branchId;
    activeModal.componentInstance.emitService.subscribe((emmitedValue) => {
      console.log(emmitedValue);
      this.branchSemesterMappedList = emmitedValue;
    });
    activeModal.componentInstance.modalHeader = 'Large Modal';
    
  }

else{
  window.confirm('Please Select a Branch')
}
}
}
 