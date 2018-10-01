import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseChapterService } from '../../data/course-chapter.service';


@Component({
  selector: 'ngx-course-chapter-model',
  templateUrl: './course-chapter-model.component.html',
  styleUrls: ['./course-chapter-model.component.scss']
})
export class CourseChapterModelComponent implements OnInit {
  CourseNotMappedList = [];
  CourseIds: string;
  selCouArr = [];
  objCou = {};

  @Input() CourseId;
  @Output() emitService: EventEmitter<any[]> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal, private courseChapterService: CourseChapterService) { }

  ngOnInit() {
    this.getCourseNotMappedYet(this.CourseId);
  }
  getCourseNotMappedYet(id) {
    debugger
    this.courseChapterService.getNotMappedChapterByCourse(id)
      .subscribe(data => {
        if (data.results.length > 0) {
          this.CourseNotMappedList = data.results;
        }
      });
  }
  IscheckedCourses(obj) {
    debugger
    if (obj.IsSelected == true) {
      this.CourseIds = obj.CourseId;
      this.selCouArr.push(this.CourseIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selCouArr;
      this.selCouArr.forEach(function (value, key) {
        console.log(value);
        if (value == obj.CourseId) {
          array.splice(key, 1);
        }
      });
      this.selCouArr = array;
    }
    this.CourseIds = this.selCouArr.toString();
  }
  saveDetails() {
    debugger
    this.objCou = {};
    this.objCou = {
      "SetAction": "INSERT",
      "CourseIds": this.CourseIds,
      "CourseId": this.CourseId
    }
    this.courseChapterService.AssignOrRemoveCourse(this.objCou)
      .subscribe(data => {
        this.emitService.next(data.results);
      })
    this.activeModal.close();
  }
  closeModal() {
    this.activeModal.close();
  }

}
