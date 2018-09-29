import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-exam-type-model',
  templateUrl: './exam-type-model.component.html',
  styleUrls: ['./exam-type-model.component.scss']
})
export class ExamTypeModelComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  
  closeModal() {
    this.activeModal.close();
  }

}
