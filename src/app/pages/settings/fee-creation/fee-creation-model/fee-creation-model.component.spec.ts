import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCreationModelComponent } from './fee-creation-model.component';

describe('FeeCreationModelComponent', () => {
  let component: FeeCreationModelComponent;
  let fixture: ComponentFixture<FeeCreationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeCreationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCreationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
