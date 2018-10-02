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
  ChapterIds: string = '';
  selCouArr = [];
  objCou = {};
  course = {};

  @Input() CourseId;
  @Output() emitService: EventEmitter<any[]> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal, 
    private courseChapterService: CourseChapterService) { }

  ngOnInit() {
    debugger
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
  IscheckedCourse(obj) {
    debugger
    if (obj.IsSelected == true) {
      this.ChapterIds = obj.ChapterId;
      this.selCouArr.push(this.ChapterIds);
    }
    else if (obj.IsSelected == false) {
      var array = this.selCouArr;
      this.selCouArr.forEach(function (value, key) {
        console.log(value);
        if (value == obj.ChapterId) {
          array.splice(key, 1);
        }
      });
      this.selCouArr = array;
    }
    this.ChapterIds = this.selCouArr.toString();
  }
  saveDetails() {
    debugger
    this.objCou = {};
    this.objCou = {
      "SetAction": "INSERT",
      "CourseId": this.CourseId,
      "ChapterIds": this.ChapterIds
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
