import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCriteriaModelComponent } from './admission-criteria-model.component';

describe('AdmissionCriteriaModelComponent', () => {
  let component: AdmissionCriteriaModelComponent;
  let fixture: ComponentFixture<AdmissionCriteriaModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionCriteriaModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionCriteriaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
