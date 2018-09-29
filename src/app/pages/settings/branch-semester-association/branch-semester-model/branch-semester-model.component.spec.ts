import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSemesterModelComponent } from './branch-semester-model.component';

describe('BranchSemesterModelComponent', () => {
  let component: BranchSemesterModelComponent;
  let fixture: ComponentFixture<BranchSemesterModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchSemesterModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchSemesterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
