import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignRouteService {

   constructor() { }
  data = [{
    id: 1,    
    StudentName: 'Bala kumar',
    SelectedRoute : '1 ',
    DropPickUpPoint : 'Marathahalli',
    FromMonth: '	30-05-2018',
    ToMonth:	'27-05-2018',
  }, {
    id: 2,    
    StudentName: 'Santanu',
    SelectedRoute : '2 ',
    DropPickUpPoint : 'ITPL',
    FromMonth: '	27-05-2018',
    ToMonth:	'30-05-2018',
  }];
  getData() {
    return this.data;
  }
}
