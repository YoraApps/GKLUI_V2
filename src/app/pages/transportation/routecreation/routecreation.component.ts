import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { RoutecreationService } from '../data/routecreation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouteCreationModelComponent } from './route-creation-model/route-creation-model.component';

@Component({
  selector: 'ngx-routecreation',
  templateUrl: './routecreation.component.html',
  styleUrls: ['./routecreation.component.scss'],
})
export class RoutecreationComponent implements OnInit {

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
      From: {
        title: 'From',
        type: 'string',
      },
      To: {
        title: 'To',
        type: 'string',
      },
      DriverInformation: {
        title: 'Driver Information',
        type: 'string',
      },
      VehicleDetails: {
        title: 'Vehicle Details',
        type: 'string',
      },
      DropingPoints: {
        title: 'Droping Points',
        type: 'string',
      },

    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: RoutecreationService,private modalService: NgbModal) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onClick() {
    const activeModal = this.modalService.open(RouteCreationModelComponent, { size: 'lg', container: 'nb-layout' });

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
