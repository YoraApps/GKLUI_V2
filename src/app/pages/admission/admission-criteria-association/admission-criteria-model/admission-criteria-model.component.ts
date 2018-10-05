import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdmissionCriteriaAssociationService } from '../../data/admission-criteria-association.service';

@Component({
  selector: 'ngx-admission-criteria-model',
  templateUrl: './admission-criteria-model.component.html',
  styleUrls: ['./admission-criteria-model.component.scss']
})
export class AdmissionCriteriaModelComponent implements OnInit {
  objBrc = {};
  ProgramId: number = 0;
  BatchId: number = 0;
  CriteriaIds: string = '';
  CriteriaDescription: string ='';
  @Input() CriteriaId;
  @Output() emitService : EventEmitter<any[]> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal,
              private admissionCriteriaAssociationService:AdmissionCriteriaAssociationService) { }

  ngOnInit() {
  }
  saveDetails() {   
    debugger
    this.objBrc  = {};   
    this.objBrc = {
      "SetAction":"INSERT",
      "CriteriaIds":this.CriteriaIds,
      "BatchId":this.BatchId,
      "ProgramId":this.ProgramId
    }
    this.admissionCriteriaAssociationService.AssignCriteria(this.objBrc)
    .subscribe(data => {
      this.emitService.next(data.results);
    })    
    this.activeModal.close();
  }
  closeModal(){
    this.activeModal.close();
  }

}
