import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DegreeCategoryService } from '../data/degree-category.service';

@Component({
  selector: 'ngx-degree-category',
  templateUrl: './degree-category.component.html',
  styleUrls: ['./degree-category.component.scss'],
})
export class DegreeCategoryComponent implements OnInit {

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
      DegreeCategoryCode: {
        title: 'Degree Category Code',
        type: 'string',
      },
      DegreeCategoryName: {
        title: 'Degree Category Name',
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
    DegreeCategoryId :number;
  constructor(private service: DegreeCategoryService) {
    
   }

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
    event.newData.DegreeCategoryId = this.DegreeCategoryId;
    event.newData.SetAction = 'INSERT';
    this.service.updateData(event.newData);
  }

}
