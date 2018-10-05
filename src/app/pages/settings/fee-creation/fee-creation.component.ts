import { Component, OnInit } from '@angular/core';
import { FeeCreationService } from '../data/fee-creation.service';
import { LocalDataSource } from 'ng2-smart-table';
import { FeeCategoryService } from '../data/fee-category.service';
import { FeeTypeService } from '../data/fee-type.service';

@Component({
  selector: 'ngx-fee-creation',
  templateUrl: './fee-creation.component.html',
  styleUrls: ['./fee-creation.component.scss']
})
export class FeeCreationComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  data;
  FeeCategoryList = [];
  FeeTypeList = [];
  FeeCategoryId: number;


  constructor(private feeCreationService: FeeCreationService,
    private service: FeeCategoryService,
    private feeTypeService: FeeTypeService) { }

  ngOnInit() {
    this.service.getData()
      .subscribe(data => {
        this.data = data.results;
        this.FeeCategoryList = data.results;
      });

      this.feeTypeService.getData()
      .subscribe(data => {
        this.data = data.results;
        this.FeeTypeList = data.results;
      });
  }

  filterChanged(selectobj) {
    console.log('value is ', selectobj);
    this.FeeCategoryId = selectobj;
    this.feeCreationService.getTypeData()
      .subscribe(data => {
        this.FeeTypeList = data.results;
      });
  }


  getFeeCategoryGrid(selectobj) {
    console.log('grid ', selectobj);
    if (selectobj != null) {
      this.feeCreationService.getTypeData()
        .subscribe(data => {
          this.data = data.results;
          this.source.load(this.data);
        });
    }
  }

}
