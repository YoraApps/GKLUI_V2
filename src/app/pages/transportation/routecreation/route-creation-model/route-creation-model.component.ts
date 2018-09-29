import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-route-creation-model',
  templateUrl: './route-creation-model.component.html',
  styleUrls: ['./route-creation-model.component.scss']
})
export class RouteCreationModelComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

}
