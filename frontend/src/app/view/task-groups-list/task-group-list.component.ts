import {Component, Input, OnInit} from '@angular/core';
import {TasksGroup} from "../../models/tasks-group";
import {TaskGroupService} from "../../services/taskGroup.service";

@Component({
  selector: 'app-task-group-list',
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.sass']
})
export class TaskGroupListComponent implements OnInit {

  @Input() tasksGroups:TasksGroup[];
  isActive:boolean=true;
  constructor(private taskService:TaskGroupService) { }

  ngOnInit(): void {
      /*if(this.taskService.taskGroups.length > 0) {
        this.isActive = true;
      }*/
  }


  deleteAll() {
    this.taskService.deleteAll().subscribe(res =>{
      console.log(res)
    });
    this.isActive = false;
  }
}
