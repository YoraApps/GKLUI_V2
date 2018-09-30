import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SemesterCourseService } from '../../data/semester-course.service';

@Component({
  selector: 'ngx-semester-course-model',
  templateUrl: './semester-course-model.component.html',
  styleUrls: ['./semester-course-model.component.scss']
})
export class SemesterCourseModelComponent implements OnInit {

  SemesterId:number = 0;
  CourseId : number = 0;
  SemesterNotMappedList = [];
  IsSelected = false;
  objBrc = {};  
  SemesterIds: string = '';
  selBrcArr = [];

  constructor(private activeModal: NgbActiveModal,private semesterCourseService:SemesterCourseService,) { }

  ngOnInit() {
    this.SemesterId = this.semesterCourseService.getSelectedSemesterId();
    console.log(this.SemesterId);
    this.getSemesterNotMappedYet(this.SemesterId);
  }

  getSemesterNotMappedYet(id) {
    this.semesterCourseService.getNotMappedSemesterByCourse(id)
    .subscribe(data=>{
      if(data.results.length > 0){
        this.SemesterNotMappedList = data.results; 
      }
    });
  }

  IscheckedCourses(obj){
    if(obj.IsSelected == true) {
      this.SemesterIds = obj.SemesterId;
      this.selBrcArr.push(this.SemesterIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selBrcArr;
      this.selBrcArr.forEach(function (value,key) {
        console.log(value);
        if(value == obj.SemesterId){
          array.splice(key, 1);
        }
      }); 
      this.selBrcArr = array;
    }
    this.SemesterIds = this.selBrcArr.toString();
  }

  saveDetails() {   
    this.objBrc  = {};
    this.SemesterId = this.semesterCourseService.getSelectedSemesterId();
    this.objBrc = {
      "SetAction":"INSERT",
      "SemesterIds":this.SemesterIds,
      "CourseId":this.CourseId
    }
    this.semesterCourseService.AssignOrRemoveCourse(this.objBrc);
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }

}
