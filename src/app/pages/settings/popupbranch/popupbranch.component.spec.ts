import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupbranchComponent } from './popupbranch.component';

describe('PopupbranchComponent', () => {
  let component: PopupbranchComponent;
  let fixture: ComponentFixture<PopupbranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupbranchComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
