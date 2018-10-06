import { Component, OnInit } from '@angular/core';
import { FeeCategoryService } from '../data/fee-category.service';
import { FeeTypeService } from '../data/fee-type.service';
import { FeeCreationService } from '../data/fee-creation.service';

@Component({
  selector: 'ngx-fee-creation',
  templateUrl: './fee-creation.component.html',
  styleUrls: ['./fee-creation.component.scss']
})
export class FeeCreationComponent implements OnInit {

  SetAction: string;
  FeeCategoryId: number;
  FeeCategoryList = [];
  FeeTypeList = [];
  activefcList = [];
  activeftList = [];
  FeeTypeId: number;
  selectfcobj = {};
  selectftobj = {};
  data;


  constructor(private fcservice: FeeCategoryService,
    private feeTypeService: FeeTypeService,
    private feeCreationService: FeeCreationService) { }

  ngOnInit() {
    this.fcservice.getData()
      .subscribe(data => {
        this.FeeCategoryList = data.results;
      });

    this.feeTypeService.getData()
      .subscribe(data => {
        this.FeeTypeList = data.results;
      });

    this.getActiveFeeCategory();

    this.getActiveFeeType();

  }

  getActiveFeeCategory() {
    this.feeCreationService.getCategoryData()
      .subscribe(data => {
        this.activefcList = data.results;

      })
  }

  getActiveFeeType() {
    this.feeCreationService.getTypeData()
      .subscribe(data => {
        this.activeftList = data.results;
      })
  }

  fclOnChange(data) {
    this.FeeCategoryId = data.FeeCategoryId;
  }

  ftlOnChange(data) {
    this.FeeTypeId = data.FeeTypeId;
  }

  // deleteFeeCategory(data): void {
  //   data.SetAction = 'DELETE',
  //   this.feeCreationService.updateData(data.id),
  //    .subscribe(data => {
  //     this.activefcList = this.activefcList.filter(u => u !== data);
  //   })
  // }


  editFeeCategory(data): void {
    if (window.confirm('Are you sure you want to save?')) {
      data.newData['name'] += ' + added in code';
      data.newData.SetAction = 'UPDATE';
      this.feeCreationService.updateData(data.newData);
    } else {
      data.confirm.reject();
    }
  }

  addFeeCategory(data): void {
    data.newData.FeeCategoryId = this.FeeCategoryId;
    data.newData.SetAction = 'INSERT';
    this.feeCreationService.updateData(data.newData);
  }

}
