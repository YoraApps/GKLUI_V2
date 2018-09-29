import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { AssignRouteService } from "../data/assign-route.service";
import { AssignRouteModelComponent } from './assign-route-model/assign-route-model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-assign-route',
  templateUrl: './assign-route.component.html',
  styleUrls: ['./assign-route.component.scss']
})
export class AssignRouteComponent implements OnInit {

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
      StudentName: {
        title: 'Student Name',
        type: 'string',
      },
      SelectedRoute: {
        title: 'Selected Route',
        type: 'string',
      },
      DropPickUpPoint: {
        title: 'Drop Pick Up Point',
        type: 'date',
      },
      FromMonth: {
        title: 'From Month',
        type: 'date',
      },
      ToMonth: {
        title: 'To Month',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: AssignRouteService,private modalService: NgbModal) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onClick() {
    const activeModal = this.modalService.open(AssignRouteModelComponent, { size: 'lg', container: 'nb-layout' });

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
