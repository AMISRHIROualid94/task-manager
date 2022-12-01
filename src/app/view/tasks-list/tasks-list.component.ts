import {Component, Input, OnInit} from '@angular/core';
import {TasksGroup} from "../../models/tasks-group";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

  @Input() tasksGroup:TasksGroup;
  @Input() index:number
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {

  }


  removeTask(groupIndex: number, taskId: string) {
    this.taskService.deleteTask(groupIndex, taskId)
  }
}
