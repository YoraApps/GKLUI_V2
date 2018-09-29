import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCouncelorToGroupComponent } from './assign-councelor-to-group.component';

describe('AssignCouncelorToGroupComponent', () => {
  let component: AssignCouncelorToGroupComponent;
  let fixture: ComponentFixture<AssignCouncelorToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCouncelorToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCouncelorToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
