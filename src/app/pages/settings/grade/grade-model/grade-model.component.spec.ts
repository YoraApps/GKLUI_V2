import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeModelComponent } from './grade-model.component';

describe('GradeModelComponent', () => {
  let component: GradeModelComponent;
  let fixture: ComponentFixture<GradeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
