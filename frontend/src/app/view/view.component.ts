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
    this.taskService.editIsActive = false

    this.taskService.getTasksGroupsApi().subscribe(res =>{
      this.tasksGroups = res
    })
    this.router.params.subscribe(params => {
      if (params['index']){
       this.taskService.getGroupTasks(params['index']!).subscribe(res=>{
         this.tasksGroup = res
         console.log(res)
       })
        this.index = params['index'];
        this.taskService.isActive = true;
      }else {
        this.taskService.isActive = false;
      }

    })

  }

}
