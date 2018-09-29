import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BranchSemesterService } from '../../data/branch-semester-service';
@Component({
  selector: 'ngx-branch-semester-model',
  templateUrl: './branch-semester-model.component.html',
  styleUrls: ['./branch-semester-model.component.scss']
})
export class BranchSemesterModelComponent implements OnInit {
  BranchId: number = 0;
  branchSemesterMappedList = [];
  branchSemesterNotMappedmodalList = [];
  IsSelected = false;
  objSem = {};
  selSemList = [];
  SemesterIds: string = '';
  selSemArr = [];
  
  constructor(private activeModal: NgbActiveModal, private branchSemesterService:BranchSemesterService) { }

  ngOnInit() {
   this.BranchId = this.branchSemesterService.getSelectedBranchId();
   console.log(this.BranchId);
   this.getSemesterNotMappedYet(this.BranchId); 
  }
  getSemesterNotMappedYet(id) {
    debugger
    this.branchSemesterService.getNotMappedSemesterByBranch(id)
    .subscribe(data=>{
      if(data.results.length > 0){
        this.branchSemesterMappedList = data.results; 
      }
    });
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
  saveDetails() {
    debugger
    this.objSem  = {};
    this.BranchId = this.branchSemesterService.getSelectedBranchId();
    this.objSem = {
      "SetAction":"INSERT",
      "SemesterIds":this.SemesterIds,
      "BranchId":this.BranchId
    }
    this.branchSemesterService.AssignOrRemoveSemester(this.objSem);
    this.activeModal.close();
  }
  closeModal() {
    this.activeModal.close();
  }
 
}
 