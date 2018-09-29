import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudentToGroupComponent } from './assign-student-to-group.component';

describe('AssignStudentToGroupComponent', () => {
  let component: AssignStudentToGroupComponent;
  let fixture: ComponentFixture<AssignStudentToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStudentToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStudentToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
