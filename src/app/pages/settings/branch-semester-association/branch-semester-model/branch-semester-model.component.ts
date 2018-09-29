import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BranchSemesterService } from '../../data/branch-semester-service';
@Component({
  selector: 'ngx-branch-semester-model',
  templateUrl: './branch-semester-model.component.html',
  styleUrls: ['./branch-semester-model.component.scss']
})
export class BranchSemesterModelComponent implements OnInit {
  BatchId: number = 0;
  branchSemesterMappedList = [];
  
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close();
  }

}
 