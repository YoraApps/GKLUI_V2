import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DriverMasterService } from '../../../pages/transportation/data/driver-master.service';
import { DriverModelComponent } from './driver-model/driver-model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-driver-master',
  templateUrl: './driver-master.component.html',
  styleUrls: ['./driver-master.component.scss'],
})
export class DriverMasterComponent implements OnInit {

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
      DriverName: {
        title: 'Driver Name',
        type: 'string',
      },
      DriverLicenceNo: {
        title: 'Driver Licence No',
        type: 'string',
      },
      DriverLicenceExpDate: {
        title: 'Driver Licence Exp Date',
        type: 'date',
      },
      DriverMobileNo: {
        title: 'Driver Mobile No',
        type: 'number',
      },
      DateofBirth: {
        title: 'Date of Birth',
        type: 'date',
      },
      Experience: {
        title:  'Experience',
        type: 'number',
      },
      ReferenceName: {
        title: 	'Reference Name',
        type: 'string',
      },
      ReferenceContactNo: {
        title: 	'Reference ContactNo',
        type: 'number',
      },
      Address: {
        title: 	' Address',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  data;
    dataArray: any = [];
  constructor(private service: DriverMasterService,private modalService: NgbModal) {
    
  }

  onClick() {
    const activeModal = this.modalService.open(DriverModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      if (event.data.DriverId != null) {
        this.service.removeData(event.data.DriverId);
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
