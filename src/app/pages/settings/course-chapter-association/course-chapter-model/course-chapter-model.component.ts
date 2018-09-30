import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseChapterService } from '../../data/course-chapter.service';


@Component({
  selector: 'ngx-course-chapter-model',
  templateUrl: './course-chapter-model.component.html',
  styleUrls: ['./course-chapter-model.component.scss']
})
export class CourseChapterModelComponent implements OnInit {
  CourseId: number = 0;
  courseChapterMappedList = [];
  CourseIds: string;
  selCouArr = []; 
  objCou = {};

  constructor(private activeModal: NgbActiveModal,private courseChapterService:CourseChapterService) { }

  ngOnInit() {
    this.CourseId = this.courseChapterService.getSelectedCourseId();
   console.log(this.CourseId);
   this.getCourseNotMappedYet(this.CourseId);
  }
  getCourseNotMappedYet(id) {
    debugger
    this.courseChapterService.getNotMappedChapterByCourse(id)
    .subscribe(data=>{
      if(data.results.length > 0){
        this.courseChapterMappedList = data.results; 
      }
    });
  }
  IscheckedCourses(obj){
    debugger
    if(obj.IsSelected == true) {
      this.CourseIds = obj.CourseId;
      this.selCouArr.push(this.CourseIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selCouArr;
      this.selCouArr.forEach(function (value,key) {
        console.log(value);
        if(value == obj.CourseId){
          array.splice(key, 1);
        }
      }); 
      this.selCouArr = array;
    }
    this.CourseIds = this.selCouArr.toString();   
  }
  saveDetails() {
    debugger
    this.objCou  = {};
    this.CourseId = this.courseChapterService.getSelectedCourseId();
    this.objCou = {
      "SetAction":"INSERT",
      "CourseIds":this.CourseIds,
      "CourseId":this.CourseId
    }
    this.courseChapterService.AssignOrRemoveCourse(this.objCou);
    this.activeModal.close();
  }
  closeModal() {
    this.activeModal.close();
  }

}
