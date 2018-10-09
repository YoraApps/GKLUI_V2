import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BranchService } from '../data/branch.service';
import { ProgramService } from '../data/program.service';
@Component({
  selector: 'ngx-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {
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
      BranchCode: {
        title: 'Branch Code',
        type: 'string',
      },
      BranchName: {
        title: 'Branch Name',
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
  SetAction: string;
  BranchId:number=0;
  ProgramList : any[];
  BranchList : any[];
  ProgramId:number;
  selectobj: {};
  dataArray: any = [];
  constructor(private service: BranchService,private Pservice:ProgramService) {   
  }

  ngOnInit() {
    this.Pservice.getData()
          .subscribe( data => {
            this.ProgramList= data.results;
          });
      }

      filterChanged(selectobj){      
        this.ProgramId=selectobj;
        this.service.getBranchByProgram(this.ProgramId)
            .subscribe( data => {
              this.BranchList= data.results;
        });
      }
      getBranchGrid(selectobj){
        debugger
        console.log('grid ',selectobj);
        if (selectobj!= null) {      
        this.service.getBranchByProgram(this.ProgramId)
        .subscribe( data => {
          this.data = data.results;
          if(this.data!=null){
            this.source.load(this.data);
          }else{
            window.confirm('There is No branch Created yet for the selected branch');
          }
          
        });
      }
      }
      onCreateConfirm(event): void {
        if(this.ProgramId > 0){
          event.confirm.resolve(event.newData);
          event.newData.ProgramId = this.ProgramId;
          event.newData.SetAction = 'INSERT';
          this.service.saveData(event.newData);
        }
        else{
          window.confirm('Please Select the Program');
        }
      } 

      onSaveConfirm(event): void {
        if (window.confirm('Are you sure you want to save?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
          event.newData.SetAction = 'UPDATE';
          this.service.saveData(event.newData);
        } else {
          event.confirm.reject();
        }
      } 
      onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
          event.confirm.resolve(event.data);
          event.newdata.ProgramId = this.ProgramId;
          event.data.SetAction = 'DELETE';
          this.service.saveData(event.data);
          this.service.getData();
        } else {
          event.confirm.reject();
        }
      }
}
