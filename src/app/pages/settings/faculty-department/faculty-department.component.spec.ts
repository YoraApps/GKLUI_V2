import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDepartmentComponent } from './faculty-department.component';

describe('FacultyDepartmentComponent', () => {
  let component: FacultyDepartmentComponent;
  let fixture: ComponentFixture<FacultyDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyDepartmentComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
