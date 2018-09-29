import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubModelComponent } from './club-model.component';

describe('ClubModelComponent', () => {
  let component: ClubModelComponent;
  let fixture: ComponentFixture<ClubModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
