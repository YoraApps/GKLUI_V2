import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFeeStatusComponent } from './admission-fee-status.component';

describe('AdmissionFeeStatusComponent', () => {
  let component: AdmissionFeeStatusComponent;
  let fixture: ComponentFixture<AdmissionFeeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFeeStatusComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
