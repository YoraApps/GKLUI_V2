import { Component, OnInit } from '@angular/core';
import { BatchService } from '../../settings/data/batch.service';
import { LocalDataSource } from 'ng2-smart-table';
import { AdmissionFeeStatusService } from '../data/admission-fee-status.service';
import { ProgramStudyService } from '../../settings/data/program-study.service';

@Component({
  selector: 'ngx-admission-fee-status',
  templateUrl: './admission-fee-status.component.html',
  styleUrls: ['./admission-fee-status.component.scss'],
})
export class AdmissionFeeStatusComponent implements OnInit {
    settings = {
      add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {      
      ApplicationNumber: {
        title: 'Application Number',
        type: 'number',
      },
      Name: {
        title: 'Name',
        type: 'string',
      },
      ApplicationFormFee: {
        title: 'Application Form Fee',
        type: 'number',
      },
      EntranceExamFee: {
        title: 'Entrance Exam Fee',
        type: 'number',
      },
      TotalFeesToBePaid: {
        title: 'Total Fees to be paid',
        type: 'number',
      },
      TotalFeesPaid	: {
        title: 'Total Fees paid',
        type: 'number',
      },
      PaymentStatus: {
        title: 'Payment Status',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  data;
  batchList: any[];
  ProgramStudyList: any[];
  constructor(private Admservice: AdmissionFeeStatusService, service: BatchService,private Pservice:ProgramStudyService) {
    const data = this.Admservice.getData();
    this.source.load(data);
   }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
    this.Pservice.getData()
    .subscribe( data => {
      this.data = data.results;
      console.log(this.data);
      this.ProgramStudyList = this.data;
      console.log(this.ProgramStudyList);
    });
  }

}
