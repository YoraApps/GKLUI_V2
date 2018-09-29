import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal)  { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

}
