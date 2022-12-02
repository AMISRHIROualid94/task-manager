import {Component, Input, OnInit} from '@angular/core';
import {TasksGroup} from "../../models/tasks-group";
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

  @Input() tasksGroup:TasksGroup ;
  @Input() index:number
  tempIndex:number = 0;
  isActive:boolean = false;
  constructor(private taskService:TaskService,
              private route:Router,
              private router:ActivatedRoute) { }

  ngOnInit(): void {

  }


  removeTask(groupIndex: number, taskId: string) {
    this.taskService.deleteTask(groupIndex, taskId)
    if (this.taskService.deletedTaskGroup != null){
      this.route.navigate(['/task-view'])
      this.taskService.deletedTaskGroup = null
    }
    else {
      this.route.navigate(['/task-view',groupIndex])
    }
  }

  isNotNull() :boolean{
    return this.tasksGroup != null
  }
}
