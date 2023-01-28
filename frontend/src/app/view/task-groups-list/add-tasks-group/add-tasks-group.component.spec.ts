import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksGroupComponent } from './add-tasks-group.component';

describe('AddTasksGroupComponent', () => {
  let component: AddTasksGroupComponent;
  let fixture: ComponentFixture<AddTasksGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTasksGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
