import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFacultyDepartmentComponent } from './manage-faculty-department.component';

describe('ManageFacultyDepartmentComponent', () => {
  let component: ManageFacultyDepartmentComponent;
  let fixture: ComponentFixture<ManageFacultyDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFacultyDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFacultyDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
