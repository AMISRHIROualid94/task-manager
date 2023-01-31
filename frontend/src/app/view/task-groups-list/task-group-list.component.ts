import {Component, Input, OnInit} from '@angular/core';
import {TasksGroup} from "../../models/tasks-group";
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-group-list',
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.sass']
})
export class TaskGroupListComponent implements OnInit {

  @Input() tasksGroups:TasksGroup[];
  isActive:boolean=false;
  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit(): void {
      /*if(this.taskService.taskGroups.length > 0) {
        this.isActive = true;
      }*/
  }


  deleteAll() {
    this.taskService.deleteAll().subscribe(() =>{
      this.taskService.getTasksGroupsApi().subscribe(res =>{
        this.tasksGroups = res
      })
    });
    this.isActive = false;
  }

  deleteTaskGroup(id:any){
    console.log(id)
    this.taskService.deleteTaskGroupById(id).subscribe(()=>{
      this.taskService.getTasksGroupsApi().subscribe(res =>{
        this.tasksGroups = res
        this.router.navigate(['task-view'])
      })
    })

  }
}
