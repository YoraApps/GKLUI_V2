import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoomModelComponent } from './class-room-model.component';

describe('ClassRoomModelComponent', () => {
  let component: ClassRoomModelComponent;
  let fixture: ComponentFixture<ClassRoomModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassRoomModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRoomModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
