import { Component, OnInit } from '@angular/core';
import {TaskGroupService} from "../services/taskGroup.service";
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
  constructor(private taskService : TaskGroupService,
              private router:ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {
    this.taskService.editIsActive = false

    this.taskService.getTasksGroupsApi().subscribe(res =>{
      this.tasksGroups = res
    })
    this.router.params.subscribe(params => {
      if (params['id']){
       this.taskService.getGroupTasks(params['id']!).subscribe(res=>{
         this.tasksGroup = res
         this.id = res.id
       })
        this.taskService.isActive = true;
      }else {
        this.taskService.isActive = false;
      }

    })

  }

}
