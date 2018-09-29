import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRouteComponent } from './assign-route.component';

describe('AssignRouteComponent', () => {
  let component: AssignRouteComponent;
  let fixture: ComponentFixture<AssignRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
