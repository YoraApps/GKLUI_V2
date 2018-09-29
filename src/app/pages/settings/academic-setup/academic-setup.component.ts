import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'ngx-academic-setup',
  templateUrl: './academic-setup.component.html',
  styleUrls: ['./academic-setup.component.scss']
})
export class AcademicSetupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // onClick(){

  //   this.router.navigate(['batch-program-association']);
  //  }

}
