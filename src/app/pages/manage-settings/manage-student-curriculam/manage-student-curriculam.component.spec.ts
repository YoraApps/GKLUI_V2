import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentCurriculamComponent } from './manage-student-curriculam.component';

describe('ManageStudentCurriculamComponent', () => {
  let component: ManageStudentCurriculamComponent;
  let fixture: ComponentFixture<ManageStudentCurriculamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStudentCurriculamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStudentCurriculamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
