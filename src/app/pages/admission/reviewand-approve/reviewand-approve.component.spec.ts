import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewandApproveComponent } from './reviewand-approve.component';

describe('ReviewandApproveComponent', () => {
  let component: ReviewandApproveComponent;
  let fixture: ComponentFixture<ReviewandApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewandApproveComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewandApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
