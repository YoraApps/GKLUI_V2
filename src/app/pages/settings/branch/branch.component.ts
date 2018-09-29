import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BranchService } from '../data/branch.service';
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
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data;
  SetAction: string;
  constructor(private service: BranchService) {   
   }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.data.SetAction = "REMOVE";   
      this.service.saveData(event.data);  
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
    this.service.getData()
          .subscribe( data => {
            this.data = data.results;
            this.source.load(this.data);
          });
  }

   onSaveConfirm(event): void {
     debugger
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);  
      event.newData.SetAction = 'UPDATE';   
      this.service.saveData(event.newData);
    } else {
      event.confirm.reject();
    }

   }

    onCreateConfirm(event): void {
      debugger
      event.confirm.resolve(event.newData);
      event.newData.SetAction = "INSERT";
    this.service.saveData(event.newData);
  }
}
