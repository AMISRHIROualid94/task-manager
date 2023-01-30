import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {ActivatedRoute} from "@angular/router";
import {Task} from "../../../models/Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {

  description: string=""
  currentIndex: number
  editIsActive= false
  constructor(private taskService : TaskService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentIndex = params['id'];
      if(this.taskService.editIsActive){
        //this.description = this.taskService.getTask(this.currentIndex,params['taskId']).description
      }
      if(params['taskId']){
        this.editIsActive = true
      }
      else {
        this.editIsActive = this.taskService.editIsActive
      }
    })

  }

addNewTask(){
    let newTask:Task = {description:this.description}
    this.route.params.subscribe(params => {
     this.taskService.addNewTask(newTask,params['id']).subscribe();
    })
  alert("Task added successfully")

}

  editTask() {
    this.route.params.subscribe(params => {
      //this.taskService.editTask(params['index'],params['taskId'],this.description)
    })
    alert("Task Edited successfully")
    this.taskService.editIsActive = false
  }
}
