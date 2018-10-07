import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {
  // Dummy Code for Machine Learning
  data: any;
  columnTitles: any = [];

  ngOnInit() {
    this.data = [
      { x: 100, y: 5 },
      { x: 110, y: 5.3 },
      { x: 120, y: 6.3 },
      { x: 130, y: 6.7 },
      { x: 140, y: 7.1 },
      { x: 150, y: 8 },
      { x: 160, y: 8.7 }
    ];

    this.columnTitles[0] = "X [km/h]";
    this.columnTitles[1] = "Y [l]";
  }

  public updateDataset(data: any) {
    this.data = data;
    this.data = this.data.slice();
  }
  
  public updateTitles(titles: any) {
    this.columnTitles = titles;
    this.columnTitles = this.columnTitles.slice();
  }
}
