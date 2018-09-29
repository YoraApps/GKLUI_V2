import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupModelComponent } from './group-model.component';

describe('GroupModelComponent', () => {
  let component: GroupModelComponent;
  let fixture: ComponentFixture<GroupModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
