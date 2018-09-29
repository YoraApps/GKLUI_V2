import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBranchAssociationComponent } from './program-branch-association.component';

describe('ProgramBranchAssociationComponent', () => {
  let component: ProgramBranchAssociationComponent;
  let fixture: ComponentFixture<ProgramBranchAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramBranchAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramBranchAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
