import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBranchModelComponent } from './program-branch-model.component';

describe('ProgramBranchModelComponent', () => {
  let component: ProgramBranchModelComponent;
  let fixture: ComponentFixture<ProgramBranchModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramBranchModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramBranchModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
