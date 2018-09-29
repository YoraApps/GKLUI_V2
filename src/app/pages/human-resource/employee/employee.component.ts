import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../data/leaves.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  settingsApplyEmpdata = {
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
       FullName: {
         title: 'Full Name',
         type: 'string',
       },
       LeaveType: {
         title: 'Leave Type',
         type: 'string',
       },
       StartDate:{
         title: 'Start Date',
         type: 'date',
       },
       EndDate:{
         title: 'End Date',
         type: 'date',
       },
       ApplyDate:{
         title: 'Apply Date',
         type: 'date',
       },
       Days:{
         title: 'Days',
         type: 'number',
       },
       Status: {
         title: 'Status',
         type: 'string',
       },
       Remarks:{
         title: 'Status',
         type: 'string',
       },
     },
   };
   settingsEmpdata = {
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
       FullName: {
         title: 'Full Name',
         type: 'string',
       },
       LeaveType: {
         title: 'Leave Type',
         type: 'string',
       },
       StartDate:{
         title: 'Start Date',
         type: 'date',
       },
       EndDate:{
         title: 'End Date',
         type: 'date',
       },
       ApplyDate:{
         title: 'Apply Date',
         type: 'date',
       },
       Days:{
         title: 'Days',
         type: 'number',
       },
       Status: {
         title: 'Status',
         type: 'string',
       },
       Remarks:{
         title: 'Status',
         type: 'string',
       },
     },
   };
   settingsstuddata = {
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
       FullName: {
         title: 'Full Name',
         type: 'string',
       },
       StartDate:{
         title: 'Start Date',
         type: 'date',
       },
       EndDate:{
         title: 'End Date',
         type: 'date',
       },
       ApplyDate:{
         title: 'Apply Date',
         type: 'date',
       },
       Days:{
         title: 'Days',
         type: 'number',
       },
       Status: {
         title: 'Status',
         type: 'string',
       },
       Remarks:{
         title: 'Status',
         type: 'string',
       },
     },
   };
 
  source1: LocalDataSource = new LocalDataSource();
  source2: LocalDataSource = new LocalDataSource();
  source3: LocalDataSource = new LocalDataSource();
  source4: LocalDataSource = new LocalDataSource();

  constructor(private leavesService: LeavesService) {
    const data1 = this.leavesService.getApplyEmpData();
    const data2 = this.leavesService.getAproveEmpData();
    const data3 = this.leavesService.getApplyStudData();
    const data4 = this.leavesService.getAproveStudData();
    this.source1.load(data1);
    this.source2.load(data2);
    this.source3.load(data3);
    this.source4.load(data4);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
  }

}

