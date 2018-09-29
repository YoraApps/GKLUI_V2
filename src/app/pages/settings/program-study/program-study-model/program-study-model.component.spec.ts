import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramStudyModelComponent } from './program-study-model.component';

describe('ProgramStudyModelComponent', () => {
  let component: ProgramStudyModelComponent;
  let fixture: ComponentFixture<ProgramStudyModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramStudyModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramStudyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
