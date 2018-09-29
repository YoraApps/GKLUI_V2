import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDetailModelComponent } from './applicant-detail-model.component';

describe('ApplicantDetailModelComponent', () => {
  let component: ApplicantDetailModelComponent;
  let fixture: ComponentFixture<ApplicantDetailModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantDetailModelComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
