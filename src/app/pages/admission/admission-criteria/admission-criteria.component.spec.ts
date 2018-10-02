import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCriteriaComponent } from './admission-criteria.component';

describe('AdmissionCriteriaComponent', () => {
  let component: AdmissionCriteriaComponent;
  let fixture: ComponentFixture<AdmissionCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
