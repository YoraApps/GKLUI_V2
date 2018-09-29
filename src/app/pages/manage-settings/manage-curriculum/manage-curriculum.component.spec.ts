import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCurriculumComponent } from './manage-curriculum.component';

describe('ManageCurriculumComponent', () => {
  let component: ManageCurriculumComponent;
  let fixture: ComponentFixture<ManageCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
