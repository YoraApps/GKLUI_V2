import { Component, OnInit } from '@angular/core';
import { BatchService } from '../../settings/data/batch.service';
import { ProgramStudyService } from '../../settings/data/program-study.service';

@Component({
  selector: 'ngx-exam-result-upload',
  templateUrl: './exam-result-upload.component.html',
  styleUrls: ['./exam-result-upload.component.scss']
})
export class ExamResultUploadComponent implements OnInit {
  data;
  ProgramStudyList:any[];
  batchList:any[];

  constructor(service: BatchService,private Pservice:ProgramStudyService) {
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
