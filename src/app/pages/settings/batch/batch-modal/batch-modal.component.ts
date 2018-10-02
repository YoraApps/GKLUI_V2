import { Component, OnInit, EventEmitter, Output ,Input} from '@angular/core';
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
  AcademicYearId:number=0;
  batch = { };
  reponseArray = [];

  @Output() emitService : EventEmitter<any[]> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal,private service: BatchService)  { }

  ngOnInit() {
    this.service.getData()
    .subscribe(data => {
      debugger
      this.data = data.results;
      this.batchList = this.data;
    });
  }

  batchselOnChange(obj) { 
    debugger   
    this.AcademicYearId = obj;
  }
 
  addBatch(){
    debugger
    this.batch = { "AcademicYearId" : this.AcademicYearId,"SetAction":"INSERT"};
    this.service.saveBatchCreated(this.batch)
    .subscribe(data => {
      this.emitService.next(data.results);
    })
    this.activeModal.close();
  }
  closeModal() {
    this.activeModal.close();
  }

}

