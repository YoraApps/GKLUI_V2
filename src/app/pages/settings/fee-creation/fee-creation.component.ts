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
  activefcList : any = [];
  activeftList = [];
  FeeTypeId: number;
  selectfcobj = {};
  selectftobj = {};
  objFc = {};
  data;
  getFeeListOnGrid:any;

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

  deleteFeeCategory(data) {
    this.objFc = { 
      "FeeCategoryId":data.FeeCategoryId,
      "SetAction" :"DELETE"
    }
    this.fcservice.updateData(this.objFc)
     .subscribe(data => {
      this.FeeCategoryList.push(data.results[0]);
    })
  }
}
