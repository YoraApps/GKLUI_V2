import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleComponent } from './schedule/schedule.component';

@Component({
  selector: 'ngx-scheduleexamination',
  templateUrl: './scheduleexamination.component.html',
  styleUrls: ['./scheduleexamination.component.scss']
})
export class ScheduleExaminationComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  onClick() {
    const activeModal = this.modalService.open(ScheduleComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

}
