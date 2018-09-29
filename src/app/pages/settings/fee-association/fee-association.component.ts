import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { BatchService } from '../data/batch.service';
import { ProgramService } from '../data/program.service';
import { BranchService } from '../data/branch.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeeAssociationModelComponent } from './fee-association-model/fee-association-model.component';

@Component({
  selector: 'ngx-fee-association',
  templateUrl: './fee-association.component.html',
  styleUrls: ['./fee-association.component.scss']
})
export class FeeAssociationComponent implements OnInit {

source: LocalDataSource = new LocalDataSource();
data;
batchList:any[];
ProgramList:any[];
branchList:any[];
  constructor(private service: BatchService,
    private programService: ProgramService,
    private branchservice: BranchService,
    private modalService: NgbModal) {

   }

   onClick() {
    const activeModal = this.modalService.open(FeeAssociationModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

  ngOnInit() {
    this.service.getData()    
    .subscribe(data => {
      this.data = data.results;
      this.source.load(this.data);
      this.batchList = data.results; 
    });

    this.programService.getData()
    .subscribe(data => {
      this.data = data.results;
      this.source.load(this.data);
      this.ProgramList = data.results;
  });

  this.branchservice.getData()
    .subscribe(data => {
      this.data = data.results;
      this.source.load(this.data);
      this.branchList = data.results;
  });

  }

}

