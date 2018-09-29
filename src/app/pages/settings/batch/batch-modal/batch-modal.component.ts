import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BatchService } from '../../data/batch.service';
@Component({
  selector: 'ngx-batch-modal',
  templateUrl: './batch-modal.component.html',
  styleUrls: ['./batch-modal.component.scss']
})
export class BatchModalComponent implements OnInit {

  data;
  batchList:any[];

  constructor(private activeModal: NgbActiveModal,private service: BatchService)  { }

  ngOnInit() {
    this.service.getData()
    .subscribe(data => {
      this.data = data.results;
      this.batchList = this.data;
    });
  }

  closeModal() {
    this.activeModal.close();
  }

}
