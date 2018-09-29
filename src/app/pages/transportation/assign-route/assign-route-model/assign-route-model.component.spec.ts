import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRouteModelComponent } from './assign-route-model.component';

describe('AssignRouteModelComponent', () => {
  let component: AssignRouteModelComponent;
  let fixture: ComponentFixture<AssignRouteModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRouteModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRouteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
