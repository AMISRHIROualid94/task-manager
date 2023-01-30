import {Component, Input, OnInit} from '@angular/core';
import {TasksGroup} from "../../models/tasks-group";
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StyleService} from "../../services/style.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

  @Input() tasksGroup:TasksGroup ;
  @Input() taskgroupId:number
  isActive:boolean = false;
  tab:number[] = [1,2,3,4,5,6,7,8,9,10]
  constructor(private taskService:TaskService,
              private route:Router,
              private router:ActivatedRoute,
              private styileService : StyleService) { }

  ngOnInit(): void {
      this.isActive = this.taskService.isActive
      this.styileService.logData()
  }


  removeTask(taskgroupId:number,taskId: any) {
    this.taskService.deleteTaskById(taskId).subscribe();
    if (this.taskService.deletedTaskGroup != null){
      this.route.navigate(['/task-view'])
      this.taskService.deletedTaskGroup = null
    }
    else {
      this.route.navigate(['/task-view',taskgroupId])
    }
  }

  isNotNull() :boolean{
    return this.tasksGroup != null
  }

  editIsActive() {
    this.taskService.editIsActive = true;
  }
}
