import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ProgramService } from '../data/program.service';
import { DegreeTypeService } from '../data/degree-type.service';

@Component({
  selector: 'ngx-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
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
      ProgramCode: {
        title: 'Program Code',
        type: 'string',
      },
      ProgramName: {
        title: 'Program Name',
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
  selectedDegree:{}; 
  DegreeTypeList:any[]; 
  ProgramList:any[];
  dataArray: any = [];
  selectobj: {};
  DegreeTypeId:number;
  constructor(private programService: ProgramService,private dservice: DegreeTypeService) {
        // this.programService.getData()
        // .subscribe( data => {
        //   this.selectedDegree = data.results;         
        //    this.source.load(this.data.selectedDegree);          
        // });
   }
  
  //  fetchProgram(Obj1){
  //   this.ProgrameId = this.programService.filter(
  //    data=> data.ProgrameId === this.store.DegreeTypeId
  //  }
  ngOnInit() {
    this.dservice.getData()
          .subscribe( data => {
            this.DegreeTypeList= data.results; 
          });
      }

      filterChanged(selectobj){      
        console.log('value is ',selectobj);
        this.DegreeTypeId=selectobj;
        this.programService.getProgramByDegree(this.DegreeTypeId)
            .subscribe( data => {
              this.ProgramList= data.results;
        });
      }


      getProgramGrid(selectobj){
        debugger
        console.log('grid ',selectobj);
        if (selectobj!= null) {      
        this.programService.getProgramByDegree(this.DegreeTypeId)
        .subscribe( data => {
          this.data = data.results;
          this.source.load(this.data);
        });
      }
      }

      onCreateConfirm(event): void {
        if(this.DegreeTypeId > 0){
          event.confirm.resolve(event.newData);
          event.newData.DegreeTypeId = this.DegreeTypeId;
          event.newData.SetAction = 'INSERT';
          this.programService.saveData(event.newData);
        }
        else{
          window.confirm('Please Select the Degree Type');
        }
      } 
      onSaveConfirm(event): void {
        if (window.confirm('Are you sure you want to save?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
          event.newData.SetAction = 'UPDATE';
          this.programService.saveData(event.newData);
        } else {
          event.confirm.reject();
        }
      } 
       
      onDeleteConfirm(event): void {
       if (window.confirm('Are you sure you want to delete?')) {
         event.confirm.resolve(event.data);
         event.data.SetAction = 'DELETE';
         this.programService.saveData(event.data);
         this.programService.getData();
       } else {
         event.confirm.reject();
       }
     }
}
