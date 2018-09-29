import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverModelComponent } from './driver-model.component';

describe('DriverModelComponent', () => {
  let component: DriverModelComponent;
  let fixture: ComponentFixture<DriverModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
