import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BranchService } from '../data/branch.service';
import { ViewCell } from 'ng2-smart-table';
import { ModalComponent } from '../../ui-features/modals/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupService } from '../data/popup.service';

@Component({
  selector: 'ngx-button-view',
  template: `
    <button (click)="onClick()" class="btn btn-success btn-rectangle btn-demo">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input()
  value: string | number;
  @Input()
  rowData: any;

  @Output()
  save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }
  constructor(modalService: NgbModal) { }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'ngx-popupbranch',
  templateUrl: './popupbranch.component.html',
  styleUrls: ['./popupbranch.component.scss'],
})
export class PopupbranchComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  branchList: any[];
  constructor(
    private branchService: BranchService,
    private service: PopupService,
    private modalService: NgbModal,
  ) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.branchService.getData()
          .subscribe( data => {
            this.branchList= data.results;
            this.source.load( this.branchList);
          });
  }

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
      BranchId: {
        title: 'Branch',
        type: 'string',
      },
      BatchCode: {
        title: 'Batch Code',
        type: 'string',
      },
      BatchName: {
        title: 'Batch Name',
        type: 'string',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction: instance => {
          instance.save.subscribe(row => {
            const activeModal = this.modalService.open(ModalComponent, {
              size: 'lg',
              container: 'nb-layout',
            });
            activeModal.componentInstance.modalHeader = 'Batch Details';
          });
        },
      },
    },
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
