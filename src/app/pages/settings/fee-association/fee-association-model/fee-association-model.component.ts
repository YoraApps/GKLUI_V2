import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-fee-association-model',
  templateUrl: './fee-association-model.component.html',
  styleUrls: ['./fee-association-model.component.scss']
})
export class FeeAssociationModelComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

}
