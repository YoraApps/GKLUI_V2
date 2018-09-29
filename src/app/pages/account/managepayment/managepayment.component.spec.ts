import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepaymentComponent } from './managepayment.component';

describe('ManagepaymentComponent', () => {
  let component: ManagepaymentComponent;
  let fixture: ComponentFixture<ManagepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepaymentComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
