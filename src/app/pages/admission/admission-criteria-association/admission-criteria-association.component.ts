import { Component, OnInit } from '@angular/core';
import {AdmissionCriteriaAssociationService} from '../data/admission-criteria-association.service';
import { BatchService } from '../../settings/data/batch.service';
import { BatchProgramService } from '../../settings/data/batch-program.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdmissionCriteriaModelComponent } from '../admission-criteria-association/admission-criteria-model/admission-criteria-model.component';
@Component({
  selector: 'ngx-admission-criteria-association',
  templateUrl: './admission-criteria-association.component.html',
  styleUrls: ['./admission-criteria-association.component.scss'],
  providers:[BatchProgramService]
})
export class AdmissionCriteriaAssociationComponent implements OnInit {

  constructor( private admissionCriteriaAssociationService:AdmissionCriteriaAssociationService,
  private batchService:BatchService,
  private batchprogramService:BatchProgramService,
  private modalService: NgbModal,) { }
  selectobj: any;
  selectobjProgram:any;
  activeBatchList = []; 
  admissionCriteriaList =[];
  admissionCriteriaAssociationList=[];
  admissionCriteriaAssociationLists =[];
  isdatathere: boolean;
  batchId: number = 0;
  criteriaId: number = 0;
  ProgramId: number = 0;
  CriteriaIds: string ;
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
    debugger
    this.batchId = id;
    this.batchprogramService.getMappedProgramByBatch(this.batchId)
    .subscribe(data => {
      this.admissionCriteriaAssociationList = data.results;
    
    })
  }
  
  programselOnChange(Id) {
    debugger
    this.ProgramId=Id;
  }
  getCriteriaGrid() {  
    debugger
    this.admissionCriteriaAssociationService.getAdmissionCriteriaAssociation(this.ProgramId,this.batchId)
    .subscribe(data => {
      this.admissionCriteriaAssociationLists = data.results;    
    })
    if(this.admissionCriteriaAssociationLists.length > 0){
      this.isdatathere = true;
    }
  }
  onClick() {
    if(this.ProgramId > 0){
    const activeModal = this.modalService.open(AdmissionCriteriaModelComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.ProgramId = this.ProgramId;
    activeModal.componentInstance.emitService.subscribe((emmitedValue) => {
      console.log(emmitedValue);
      this.admissionCriteriaAssociationList = emmitedValue;
    });
    activeModal.componentInstance.modalHeader = 'Large Modal';
    
  }
  
else{
  window.confirm('Please Select a program')
}
}
}
              

