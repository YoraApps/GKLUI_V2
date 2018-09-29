import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchProgramModelComponent } from './batch-program-model.component';

describe('BatchProgramModelComponent', () => {
  let component: BatchProgramModelComponent;
  let fixture: ComponentFixture<BatchProgramModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchProgramModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchProgramModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
