import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeCategoryComponent } from './degree-category.component';

describe('DegreeCategoryComponent', () => {
  let component: DegreeCategoryComponent;
  let fixture: ComponentFixture<DegreeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeCategoryComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
