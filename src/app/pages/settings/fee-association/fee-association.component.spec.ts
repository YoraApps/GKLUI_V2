import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeAssociationComponent } from './fee-association.component';

describe('FeeAssociationComponent', () => {
  let component: FeeAssociationComponent;
  let fixture: ComponentFixture<FeeAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
