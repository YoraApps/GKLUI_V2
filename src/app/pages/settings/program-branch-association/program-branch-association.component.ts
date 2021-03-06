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

  constructor(private modalService: NgbModal,
  private batchService : BatchService,
  private programService:ProgramService,
  private programBranchService:ProgramBranchService,
  private batchprogramService:BatchProgramService) { }
  activeBatchList = [];
  programList=[];
  progarmBranchMappedList = [];
  batchProgramMappedList = [];
  selBrcArr = [];
  objBrc={};
  isdatathere: boolean;
  batchId: number = 0;
  ProgramId:number = 0;
  BranchIds:string;
  selectObj = {};
  selectProgramObj = {}; 
  //public data : any
  ngOnInit() {
    this.onLoadBatchList();
  }

  onLoadBatchList() {
    this.batchService.getActiveBatches()
    .subscribe(data => {
      this.activeBatchList = data.results;
    }); 
  }

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
   

  batchselOnChange(id) {      
    this.batchId = id;  
    this.batchprogramService.getMappedProgramByBatch(this.batchId)
    .subscribe(data => {
      this.batchProgramMappedList = data.results;    
    })   
  }
  
  programselOnChange(Id) {
    debugger
    this.ProgramId=Id;
    // this.programBranchService.getMappedBranchByProgram(this.ProgramId)
    // .subscribe(data => {
    //   this.progarmBranchMappedList = data.results;
    // })
    // if(this.ProgramId > 0){
    // this.programBranchService.setSelectedProgramId(this.ProgramId);
    // }
  }
  getBranchGrid() {  
    debugger
    this.programBranchService.getMappedBranchByProgram(this.ProgramId)
    .subscribe(data => {
      this.progarmBranchMappedList = data.results;    
    })
    if(this.progarmBranchMappedList.length > 0){
      //this.isdatathere = true;
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
    if(this.BranchIds!=null){
    debugger
    this.objBrc  = {};
    this.objBrc = {
      "SetAction":"DELETE",  
      "BranchIds":this.BranchIds,
      "ProgramId":this.ProgramId
    }    
    this.programBranchService.AssignOrRemoveBranch(this.objBrc)    
    .subscribe(data => {
      this.progarmBranchMappedList = data.results; 
      this.selBrcArr=[];
    })
  }
    else{
      window.confirm('Please Select a Batch')
   }
  }
  //   var array = this.progarmBranchMappedList;
  //   this.progarmBranchMappedList.forEach(function (value,key) {
  //     console.log(value);
  //     if(value.IsSelected == true){
  //       array.splice(key, 1);
  //     }
  //   });
  //   this.progarmBranchMappedList= array;
  // }
  // getUpdatedList(dataList) {
  //   this.progarmBranchMappedList = dataList;    
  // }
  onClick() {
    if(this.ProgramId>0){
    const activeModal = this.modalService.open(ProgramBranchModelComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.ProgramId = this.ProgramId;
    activeModal.componentInstance.emitService.subscribe((emmitedValue) => {
      this.progarmBranchMappedList = emmitedValue;
    });

    activeModal.componentInstance.modalHeader = 'Large Modal';
    }
    else{
       window.confirm('Please Select a Batch')
    }
    
  }
}
