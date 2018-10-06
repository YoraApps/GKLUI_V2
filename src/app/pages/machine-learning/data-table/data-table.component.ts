import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
    @Input() data: any;
    @Input() columnTitles: any;
    @Output() onValuesChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() onTitlesChange: EventEmitter<any> = new EventEmitter<any>();
    
    changeValues(event, index, xy) {
        try {
            this.data[index][xy] = parseFloat(event.target.value);
            this.onValuesChange.emit(this.data);
        } catch (err) {
            console.log("This value is incorrect.");
        }       
    }

    changeTitles(event) {
        this.onTitlesChange.emit(this.columnTitles);
    }
}