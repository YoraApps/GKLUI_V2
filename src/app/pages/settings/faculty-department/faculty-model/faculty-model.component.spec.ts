import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyModelComponent } from './faculty-model.component';

describe('FacultyModelComponent', () => {
  let component: FacultyModelComponent;
  let fixture: ComponentFixture<FacultyModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
