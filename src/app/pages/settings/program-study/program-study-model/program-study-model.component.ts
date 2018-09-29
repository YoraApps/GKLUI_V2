import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-program-study-model',
  templateUrl: './program-study-model.component.html',
  styleUrls: ['./program-study-model.component.scss']
})
export class ProgramStudyModelComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

}
