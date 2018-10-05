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
    FeeCategoryId :number;
    FeeCategoryList = [];
    FeeTypeList = [];
    activefcList = [];
    activeftList = [];
    FeeTypeId :number;
    selectfcobj = {};
    selectftobj = {};


  constructor(private fcservice: FeeCategoryService,
    private feeTypeService: FeeTypeService,
    private feeCreationService : FeeCreationService) { }

  ngOnInit() {
    debugger
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
    debugger
    this.feeCreationService.getCategoryData()
      .subscribe(data => {
        debugger
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

}
