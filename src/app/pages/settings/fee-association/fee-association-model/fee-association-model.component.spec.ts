import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeAssociationModelComponent } from './fee-association-model.component';

describe('FeeAssociationModelComponent', () => {
  let component: FeeAssociationModelComponent;
  let fixture: ComponentFixture<FeeAssociationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeAssociationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeAssociationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
