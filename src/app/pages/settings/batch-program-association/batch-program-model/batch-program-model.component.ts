import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BatchProgramService } from '../../data/batch-program.service';

@Component({
  selector: 'ngx-batch-program-model',
  templateUrl: './batch-program-model.component.html',
  styleUrls: ['./batch-program-model.component.scss']
})
export class BatchProgramModelComponent implements OnInit {

  BatchId: number = 0;
  batchProgramNotMappedList = [];
  batchProgramNotMappedmodalList = [];
  IsSelected = false;
  objPrgm = {};
  selPrgmList = [];
  ProgramIds: string = '';
  selPrgmArr = [];

  constructor(private activeModal: NgbActiveModal,
              private batchprogramService:BatchProgramService) { }
             
  ngOnInit() {
   this.BatchId = this.batchprogramService.getSelectedBatchId();
   console.log(this.BatchId);
   this.getProgramsNotMappedYet(this.BatchId); 
    
  }

  
  getProgramsNotMappedYet(id) {
    this.batchprogramService.getNotMappedProgramByBatch(id)
    .subscribe(data=>{
      if(data.results.length > 0){
        this.batchProgramNotMappedList = data.results; 
      }
    });
  }
   
  IscheckedPrograms(obj){
    debugger
    if(obj.IsSelected == true) {
      this.ProgramIds = obj.ProgramId;
      this.selPrgmArr.push(this.ProgramIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selPrgmArr;
      this.selPrgmArr.forEach(function (value,key) {
        console.log(value);
        if(value == obj.ProgramId){
          array.splice(key, 1);
        }
      }); 
      this.selPrgmArr = array;
    }
    this.ProgramIds = this.selPrgmArr.toString();
    // this.objPrgm = obj;
    // this.selPrgmList.push(obj);
  }

  saveDetails() {
    debugger
    this.objPrgm  = {};
    this.BatchId = this.batchprogramService.getSelectedBatchId();
    this.objPrgm = {
      "SetAction":"INSERT",
      "ProgramIds":this.ProgramIds,
      "BatchId":this.BatchId
    }
    this.batchprogramService.AssignOrRemoveProgram(this.objPrgm);
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }

}
