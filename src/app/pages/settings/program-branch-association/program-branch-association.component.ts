import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProgramBranchModelComponent } from './program-branch-model/program-branch-model.component';
import { BatchService } from '../data/batch.service';
import { ProgramService } from '../data/program.service';
import { ProgramBranchService } from '../data/program-branch.service';
import { BatchProgramService } from '../data/batch-program.service';

@Component({
  selector: 'ngx-program-branch-association',
  templateUrl: './program-branch-association.component.html',
  styleUrls: ['./program-branch-association.component.scss']
})
export class ProgramBranchAssociationComponent implements OnInit {

  constructor(private modalService: NgbModal,private batchService : BatchService,
  private programService:ProgramService,private programBranchService:ProgramBranchService,
   private batchprogramService:BatchProgramService) { }
  activeBatchList = [];
  programList=[];
  progarmBranchMappedList = [];
  batchProgramMappedList = [];
  isdatathere: boolean;
  batchId: number = 0;
  ProgramId:number = 0;
  BranchIds:string;
  selBrcArr = [];
  objBrc={};
  //public data : any
  ngOnInit() {
    this.batchService.getActiveBatches()
    .subscribe(data => {
      this.activeBatchList = data.results;
    }); 
  //   this.data = [
  //   {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'36', 'city':'Noida' },
  //   {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'36', 'city':'Noida' },
  //   {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  //   {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
  //  ]
   } 

  batchselOnChange(id) {    
    this.batchId = id;  
    this.batchprogramService.getMappedProgramByBatch(this.batchId)
    .subscribe(data => {
      this.batchProgramMappedList = data.results;    
    })
    this.programService.getData()
    .subscribe(data => { 
      debugger     
      this.programList = data.results;
    });
  }
  
  programselOnChange(Id) {
    this.ProgramId=Id;
    this.programBranchService.getMappedBranchByProgram(this.ProgramId)
    .subscribe(data => {
      this.progarmBranchMappedList = data.results;
    })
    if(this.ProgramId > 0){
    this.programBranchService.setSelectedProgramId(this.ProgramId);
    }
  }
  getBranchGrid() {
    debugger
    if(this.progarmBranchMappedList.length > 0 && this.batchId > 0){
      this.isdatathere = true;
    }
  }
  IscheckedBranches(obj){
    debugger
    if(obj.IsSelected == true) {
      this.BranchIds = obj.BranchId;
      this.selBrcArr.push(this.BranchIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selBrcArr;
      this.selBrcArr.forEach(function (value,key) {
        console.log(value);
        if(value == obj.BranchId){
          array.splice(key, 1);
        }
      }); 
      this.selBrcArr = array;
    }
    this.BranchIds = this.selBrcArr.toString();   
  }

  removeBranchfrmMapping() {
    this.objBrc  = {};
    this.objBrc = {
      "SetAction":"DELETE",
      "BranchIds":this.BranchIds,
      "ProgramId":this.ProgramId
    }
    this.programBranchService.AssignOrRemoveBranch(this.objBrc);
    this.programselOnChange(this.ProgramId);
  }
  onClick() {
    const activeModal = this.modalService.open(ProgramBranchModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
  

}
