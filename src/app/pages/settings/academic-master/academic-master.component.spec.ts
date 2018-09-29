import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicMasterComponent } from './academic-master.component';

describe('AcademicMasterComponent', () => {
  let component: AcademicMasterComponent;
  let fixture: ComponentFixture<AcademicMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicMasterComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
