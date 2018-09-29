import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { VehicleService } from '../../../pages/transportation/data/vehicle.service';
import { VehicalModelComponent } from './vehical-model/vehical-model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      RegistrationLicenseNumber: {
        title: 'Registration/License Number',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'number',
      },      
      OwnerNumber: {
        title: 'Owner Number',
        type: 'number',
      },
      WeightCapacity: {
        title: 'Weight Capacity',
        type: 'number',
      },
      VehicleStatus: {
        title: 'Vehicle Status',
        type: 'boolean',
      },
      RegistrationDate: {
        title: 'Registration Date',
        type: 'date',
      },
      InsuranceDetails: {
        title:  'Insurance Details',
        type: 'string',
      },
      InsuranceExpiryDate: {
        title: 	'Insurance Expiry Date',
        type: 'date',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  
  constructor(private service: VehicleService,private modalService: NgbModal) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onClick() {
    const activeModal = this.modalService.open(VehicalModelComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
