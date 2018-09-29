import { Component, OnInit } from '@angular/core';
import { GroupService } from '../data/group.service ';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupModelComponent } from './group-model/group-model.component';

@Component({
  selector: 'ngx-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

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
      GroupCode: {
        title: 'Group Code',
        type: 'string',
      },
      GroupName: {
        title: 'Group Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  data;
  SetAction: string;
  dataArray: any = [];

  constructor(private service: GroupService,private modalService: NgbModal) {
    
   }

   onClick() {
    const activeModal = this.modalService.open(GroupModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      if (event.data.GroupMasterId != null) {
        this.service.removeData(event.data.GroupMasterId);
      }
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
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      event.newData.SetAction = 'UPDATE';
      this.dataArray.push(event.newData);
      this.service.saveData(this.dataArray);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    event.confirm.resolve(event.newData);
    event.newData.SetAction = 'INSERT';
    this.dataArray.push(event.newData);
    this.service.saveData(this.dataArray);
  }


}
