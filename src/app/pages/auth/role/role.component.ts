import { Component, OnInit } from '@angular/core';
import { RoleserviceService } from '../data/roleservice.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
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
    // selectMode:'multi',
    columns: {
      RoleName: {
        title: 'Role',
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
  constructor(private service: RoleserviceService ) { }

  onDeleteConfirm(event): void {
    debugger
   if (window.confirm('Are you sure you want to delete?')) {
     event.confirm.resolve(event.data);
     event.data.SetAction = 'DELETE';
     this.service.updateData(event.data);
     this.service.getData();
   } else {
     event.confirm.reject();
   }
 }

 ngOnInit() {
   debugger
  this.service.getData()
  .subscribe(data => {
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
    this.service.updateData(event.newData);
  } else {
    event.confirm.reject();
  }
}

onCreateConfirm(event): void {
  event.confirm.resolve(event.newData);
  event.newData.SetAction = 'INSERT';
  this.service.updateData(event.newData);
}
}
