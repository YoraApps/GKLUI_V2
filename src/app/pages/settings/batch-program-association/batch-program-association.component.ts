import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BatchProgramModelComponent } from './batch-program-model/batch-program-model.component';
import { BatchService } from '../data/batch.service';
import { BatchProgramService } from '../data/batch-program.service';

@Component({
  selector: 'ngx-batch-program-association',
  templateUrl: './batch-program-association.component.html',
  styleUrls: ['./batch-program-association.component.scss']
})
export class BatchProgramAssociationComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private batchService : BatchService,
              private batchprogramService:BatchProgramService) { }

  activeBatchList = [];
  batchProgramMappedList = [];
  batchProgramNotMappedList = [];
  isdatathere: boolean = false;
  batchId: number = 0;
  ProgramIds: string;
  selPrgmArr = [];
  objPrgm  = {};

  //InIt Func
  ngOnInit() {
    this.onLoadBatchList();
  }
  //Page Load Func Batch Drop Down List 
  onLoadBatchList() {
    this.batchService.getActiveBatches()
    .subscribe(data => {
      this.activeBatchList = data.results;
    });
  }
  //Batch Drop Down Selection Event Call
  batchselOnChange(id) {
    this.batchId = id;
  }
  //Get Associated Program List In Grid For Above Selected Batch..
  getProgramListOnGrid() {
    this.batchprogramService.getMappedProgramByBatch(this.batchId)
    .subscribe(data => {
      this.batchProgramMappedList = data.results;
    
    })
    if(this.batchProgramMappedList.length > 0){
      this.isdatathere = true;
    }
  }
  //CheckBox Func Goes Here....
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
  //Remove Program From Associated Batch
  removeProgramFrmMapping() {
    this.objPrgm  = {};
    this.objPrgm = {
      "SetAction":"DELETE",
      "ProgramIds":this.ProgramIds,
      "BatchId":this.batchId
    }
    this.batchprogramService.AssignOrRemoveProgram(this.objPrgm)
    .subscribe(data => {
      debugger
      this.batchProgramMappedList = data.results; 
    })
  }
  //Modal Events Goes Here...
  onClick() {
    if(this.batchId > 0){
      const activeModal = this.modalService.open(BatchProgramModelComponent, { size: 'lg', container: 'nb-layout'});

      activeModal.componentInstance.BatchId = this.batchId;

      activeModal.componentInstance.emitService.subscribe((emmitedValue) => {
        console.log(emmitedValue);
        this.batchProgramMappedList = emmitedValue;
      });

      activeModal.componentInstance.modalHeader = 'Large Modal';
    }
    else{
      window.confirm('Please Select a Batch')
    }

  }

}


