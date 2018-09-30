import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseChapterService } from '../../data/course-chapter.service';


@Component({
  selector: 'ngx-course-chapter-model',
  templateUrl: './course-chapter-model.component.html',
  styleUrls: ['./course-chapter-model.component.scss']
})
export class CourseChapterModelComponent implements OnInit {
  BatchId: number = 0;
  courseChapterMappedList = [];

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close();
  }

}
