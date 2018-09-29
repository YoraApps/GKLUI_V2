import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutecreationComponent } from './routecreation.component';

describe('RoutecreationComponent', () => {
  let component: RoutecreationComponent;
  let fixture: ComponentFixture<RoutecreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutecreationComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
