import {Component, Input, OnInit} from '@angular/core';
import {TasksGroup} from "../../models/tasks-group";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-group-list',
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.sass']
})
export class TaskGroupListComponent implements OnInit {

  @Input() tasksGroups:TasksGroup[];
  isActive:boolean = false;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {

  }


}
