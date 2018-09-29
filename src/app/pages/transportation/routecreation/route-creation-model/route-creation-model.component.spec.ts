import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCreationModelComponent } from './route-creation-model.component';

describe('RouteCreationModelComponent', () => {
  let component: RouteCreationModelComponent;
  let fixture: ComponentFixture<RouteCreationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteCreationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteCreationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
