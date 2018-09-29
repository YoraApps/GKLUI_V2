import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchProgramAssociationComponent } from './batch-program-association.component';

describe('BatchProgramAssociationComponent', () => {
  let component: BatchProgramAssociationComponent;
  let fixture: ComponentFixture<BatchProgramAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchProgramAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchProgramAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
