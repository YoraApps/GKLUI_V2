import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { LocationService } from '../../../pages/transportation/data/location.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationModelComponent } from './location-model/location-model.component';
@Component({
  selector: 'ngx-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
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
      LocationName: {
        title: 'Location Name',
        type: 'string',
      },
      Address: {
        title: 'Address',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data;
  dataArray: any = [];

  constructor(private service: LocationService, private modalService: NgbModal) {

  }

  onClick() {
    const activeModal = this.modalService.open(LocationModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      if (event.data = null) {
        this.service.removeData(event.data);
      }
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
      console.log(event.newData);
      this.service.saveData(event.newData);
    } else {
      event.confirm.reject();
    }

  }

  onCreateConfirm(event): void {
    event.confirm.resolve(event.newData);
    this.service.saveData(event.newData);
  }

}
