import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramStudyComponent } from './program-study.component';

describe('ProgramStudyComponent', () => {
  let component: ProgramStudyComponent;
  let fixture: ComponentFixture<ProgramStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramStudyComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
