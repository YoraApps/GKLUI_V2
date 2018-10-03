import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCreationComponent } from './fee-creation.component';

describe('FeeCreationComponent', () => {
  let component: FeeCreationComponent;
  let fixture: ComponentFixture<FeeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
