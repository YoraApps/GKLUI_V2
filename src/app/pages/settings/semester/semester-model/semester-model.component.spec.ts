import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterModelComponent } from './semester-model.component';

describe('SemesterModelComponent', () => {
  let component: SemesterModelComponent;
  let fixture: ComponentFixture<SemesterModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
