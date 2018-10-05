import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCriteriaAssociationComponent } from './admission-criteria-association.component';

describe('AdmissionCriteriaAssociationComponent', () => {
  let component: AdmissionCriteriaAssociationComponent;
  let fixture: ComponentFixture<AdmissionCriteriaAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionCriteriaAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionCriteriaAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
