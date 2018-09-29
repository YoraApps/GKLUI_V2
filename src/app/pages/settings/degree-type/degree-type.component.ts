import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DegreeTypeService } from '../../../pages/settings/data/degree-type.service';
import { DegreeCategoryService, DegreeCategoryObject } from '../data/degree-category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-degree-type',
  templateUrl: './degree-type.component.html',
  styleUrls: ['./degree-type.component.scss'],
})
export class DegreeTypeComponent {
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
      DegreeTypeCode: {
        title: 'DegreeType Code',
        type: 'string',
      },
      DegreeTypeName: {
        title: 'DegreeType Name',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  data;
  SetAction: string;
  DegreeCategoryList: any[];
  degreetypeList: any[];
  DegreeCategoryId: number;

  constructor(private service: DegreeTypeService, private _Dservice: DegreeCategoryService) {

  }

  ngOnInit() {
    this._Dservice.getData()
      .subscribe(data => {
        this.data = data.results;
        this.DegreeCategoryList = data.results;
      });

  }

  filterChanged(selectobj) {
    console.log('value is ', selectobj);
    this.DegreeCategoryId = selectobj;
    this.service.getDegreeCategoryData(this.DegreeCategoryId)
      .subscribe(data => {
        this.degreetypeList = data.results;
      });
  }

  getDegreeCategoryGrid(selectobj){
    debugger
    console.log('grid ',selectobj);
    if (selectobj!= null) {      
    this.service.getDegreeCategoryData(this.DegreeCategoryId)
    .subscribe( data => {
      this.data = data.results;
      this.source.load(this.data);
    });
  }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      event.data.SetAction = 'DELETE';
      this.service.saveData(event.data);
      this.service.getData();
    } else {
      event.confirm.reject();
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
 
    onCreateConfirm(event): void {
      debugger
      if(this.DegreeCategoryId > 0){
       event.confirm.resolve(event.newData);
       event.newData.DegreeCategoryId = this.DegreeCategoryId;
       event.newData.SetAction = 'INSERT';
       this.service.saveData(event.newData);
      }
      else{
       window.confirm('Please Select Course Type!')
      }
    }

}