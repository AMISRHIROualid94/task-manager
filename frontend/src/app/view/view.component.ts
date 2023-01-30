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

  tasksGroups : TasksGroup[] = [];
  tasksGroup:TasksGroup;
  id : number;
  constructor(private taskService : TaskService,
              private router:ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {
    this.taskService.editIsActive = false
    this.taskService.getTasksGroupsApi().subscribe(res =>{
      this.tasksGroups = res
    })
    this.router.paramMap.subscribe(params => {
      if (params.has("id")){
       this.taskService.getGroupTasks(+params.get("id")!).subscribe(res=>{
         this.tasksGroup = res
         console.log(this.tasksGroup)
         this.id = res.id
       })
        this.taskService.isActive = true;
      }else {
        this.taskService.isActive = false;
      }

    })

  }

}
