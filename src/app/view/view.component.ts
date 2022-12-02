import { Component, OnInit } from '@angular/core';
import {TaskService} from "../services/task.service";
import {TasksGroup} from "../models/tasks-group";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {

  tasksGroups : TasksGroup[];
  tasksGroup:TasksGroup;
  index : number;
  constructor(private taskService : TaskService,
              private router:ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {
    this.tasksGroups =  this.taskService.getTasksGroups()
    this.router.params.subscribe(params => {
      if (params['index']){
        this.tasksGroup = this.taskService.getGroupTasks(params['index']!)
        this.index = params['index'];
      }

    })

  }

}
