import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDeputationComponent } from './approve-deputation.component';

describe('ApproveDeputationComponent', () => {
  let component: ApproveDeputationComponent;
  let fixture: ComponentFixture<ApproveDeputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveDeputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDeputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
