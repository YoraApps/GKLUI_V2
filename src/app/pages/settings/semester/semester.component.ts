import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { SemesterService } from "../data/semester.service";
import { BranchService } from '../data/branch.service';

@Component({
  selector: 'ngx-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      SemesterCode: {
        title: 'Semester Code',
        type: 'number',
      },
      SemesterName: {
        title: 'Semester Name',
        type: 'string',
      },
      Active: {
        title: 'IsActive',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Active',
            false: 'InActive',
            resetText: 'clear',
          },
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data;
  dataArray: any = [];
  SetAction: string;
  selectedDegree:{}; 
  BranchList:any[]; 
  SemList:any[];
  selectobj: {};
  BranchId:number;
  constructor(private service: SemesterService,private bService:BranchService) {

   }
    onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      event.newData.BranchId = this.BranchId;
      event.data.SetAction = 'DELETE';
      this.service.saveData(event.data);
      this.service.getData();
    } else {
      event.confirm.reject();
    }
  }
  
  ngOnInit() {
    this.bService.getData()
          .subscribe( data => {
            this.BranchList= data.results;
          });
  }
  filterChanged(selectobj){      
   
    this.BranchId=selectobj;
    this.service.getSemByBranch(this.BranchId)
        .subscribe( data => {
          this.SemList= data.results;
    });
  }

  getSemGrid(selectobj){
    debugger
    console.log('grid ',selectobj);
    if (selectobj!= null) {      
    this.service.getSemByBranch(this.BranchId)
    .subscribe( data => {
      this.data = data.results;
      if(this.data!=null){
        this.source.load(this.data);
      }else{
        window.confirm('There is No semester created yet for the selected branch');
      }
      
    });
  }
  }
  onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData); 
      event.newData.BranchId = this.BranchId;
      event.newData.SetAction = 'UPDATE';     
      this.service.saveData(event.newData);
    } else {
      event.confirm.reject();
    }
   }
   
   onCreateConfirm(event): void {
    if(this.BranchId > 0){
      event.confirm.resolve(event.newData);
      event.newData.BranchId = this.BranchId;
      event.newData.SetAction = 'INSERT';
      this.service.saveData(event.newData);
    }
    else{
      window.confirm('Please Select the Degree Type');
    }
  } 
}
