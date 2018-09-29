import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSemesterAssociationComponent } from './branch-semester-association.component';

describe('BranchSemesterAssociationComponent', () => {
  let component: BranchSemesterAssociationComponent;
  let fixture: ComponentFixture<BranchSemesterAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchSemesterAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchSemesterAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
