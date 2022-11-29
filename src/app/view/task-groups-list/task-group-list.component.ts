import {Component, Input, OnInit} from '@angular/core';
import {TasksGroup} from "../../models/tasks-group";

@Component({
  selector: 'app-task-group-list',
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.sass']
})
export class TaskGroupListComponent implements OnInit {

  @Input() tasksGroup:TasksGroup[];
  constructor() { }

  ngOnInit(): void {

  }

}
