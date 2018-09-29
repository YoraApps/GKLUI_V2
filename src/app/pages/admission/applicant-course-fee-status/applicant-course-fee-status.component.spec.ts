import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantCourseFeeStatusComponent } from './applicant-course-fee-status.component';

describe('ApplicantCourseFeeStatusComponent', () => {
  let component: ApplicantCourseFeeStatusComponent;
  let fixture: ComponentFixture<ApplicantCourseFeeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantCourseFeeStatusComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantCourseFeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
