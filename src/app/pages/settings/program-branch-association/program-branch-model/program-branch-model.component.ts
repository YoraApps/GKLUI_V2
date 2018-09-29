import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProgramBranchService } from '../../data/program-branch.service';

@Component({
  selector: 'ngx-program-branch-model',
  templateUrl: './program-branch-model.component.html',
  styleUrls: ['./program-branch-model.component.scss']
})
export class ProgramBranchModelComponent implements OnInit {
 
  ProgramId: number = 0;
  BranchNotMappedList = []; 
  IsSelected = false;
  objBrc = {};  
  BranchIds: string = '';
  selBrcArr = [];

 

  constructor(private activeModal: NgbActiveModal,
              private programbranchService:ProgramBranchService) { }
             
  ngOnInit() {
   this.ProgramId = this.programbranchService.getSelectedProgramId();
   console.log(this.ProgramId);
   this.getBranchNotMappedYet(this.ProgramId); 
    
  }

  
  getBranchNotMappedYet(id) {
    this.programbranchService.getNotMappedBranchByProgram(id)
    .subscribe(data=>{
      if(data.results.length > 0){
        this.BranchNotMappedList = data.results; 
      }
    });
  }
   
  IscheckedBranches(obj){
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

  saveDetails() {   
    this.objBrc  = {};
    this.ProgramId = this.programbranchService.getSelectedProgramId();
    this.objBrc = {
      "SetAction":"INSERT",
      "BranchIds":this.BranchIds,
      "ProgramId":this.ProgramId
    }
    this.programbranchService.AssignOrRemoveBranch(this.objBrc);
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }

}
