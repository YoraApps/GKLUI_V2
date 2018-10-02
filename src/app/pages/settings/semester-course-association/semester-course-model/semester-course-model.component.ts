import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SemesterCourseService } from '../../data/semester-course.service';

@Component({
  selector: 'ngx-semester-course-model',
  templateUrl: './semester-course-model.component.html',
  styleUrls: ['./semester-course-model.component.scss']
})
export class SemesterCourseModelComponent implements OnInit {

  @Input() semesterId;
  @Output() emitService : EventEmitter<any[]> = new EventEmitter();
  SemesterNotMappedList = [];
  IsSelected = false;
  semester = {};
  objBrc = {};  
  CourseIds: string = '';
  selBrcArr = [];

  constructor(private activeModal: NgbActiveModal,
    private semesterCourseService:SemesterCourseService,) { }

  ngOnInit() {
    debugger
    this.getCourseNotMappedYet(this.semesterId);
  }

  getCourseNotMappedYet(id) {
    this.semesterCourseService.getNotMappedSemesterByCourse(id)
    .subscribe(data=>{
      if(data.results.length > 0){
        this.SemesterNotMappedList = data.results; 
      }
    });
  }

  IscheckedCourses(obj){
    debugger
    if(obj.IsSelected == true) {
      this.CourseIds = obj.CourseId;
      this.selBrcArr.push(this.CourseIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selBrcArr;
      this.selBrcArr.forEach(function (value,key) {
        console.log(value);
        if(value == obj.CourseId){
          array.splice(key, 1);
        }
      }); 
      this.selBrcArr = array;
    }
    this.CourseIds = this.selBrcArr.toString();
  }

  saveDetails() {   
    this.objBrc  = {};
    this.objBrc = {
      "SetAction":"INSERT",
      "SemesterId":this.semesterId,
      "CourseIds":this.CourseIds
    }
    this.semesterCourseService.AssignOrRemoveCourse(this.objBrc)
    .subscribe(data => {
      this.emitService.next(data.results);
    })
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }

}
