import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalModelComponent } from './vehical-model.component';

describe('VehicalModelComponent', () => {
  let component: VehicalModelComponent;
  let fixture: ComponentFixture<VehicalModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
