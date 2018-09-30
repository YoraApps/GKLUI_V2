import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BatchProgramService } from '../../data/batch-program.service';

@Component({
  selector: 'ngx-batch-program-model',
  templateUrl: './batch-program-model.component.html',
  styleUrls: ['./batch-program-model.component.scss']
})
export class BatchProgramModelComponent implements OnInit {

 // BatchId: number = 0;
  batchProgramNotMappedList = [];
  batchProgramNotMappedmodalList = [];
  IsSelected = false;
  objPrgm = {};
  selPrgmList = [];
  ProgramIds: string = '';
  selPrgmArr = [];
  batchProgramMappedList = [];

  @Input() BatchId;
  @Output() emitService : EventEmitter<any[]> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal,
              private batchprogramService:BatchProgramService) { }
  //InIt Func          
  ngOnInit() {
   debugger
   this.getProgramsNotMappedYet(this.BatchId); 
  }
  //Get Program List Not Associated With The Selected Batch
  getProgramsNotMappedYet(id) {
    this.batchprogramService.getNotMappedProgramByBatch(id)
    .subscribe(data=>{
      if(data.results.length > 0){
        this.batchProgramNotMappedList = data.results; 
      }
    });
  }
  //CheckBox Func...
  IscheckedPrograms(obj){
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
  }
  //Save The Programs Which Are Selected Above 
  saveDetails() {
    this.objPrgm  = {};
    this.objPrgm = {
      "SetAction":"INSERT",
      "ProgramIds":this.ProgramIds,
      "BatchId":this.BatchId
    }
    this.batchprogramService.AssignOrRemoveProgram(this.objPrgm)
    .subscribe(data => {
      this.emitService.next(data.results);
    })
    this.activeModal.close();
  }
  //Modal Close Func...
  closeModal() {
    this.activeModal.close();
  }

}
