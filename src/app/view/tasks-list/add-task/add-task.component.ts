import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {

  description: string=""
  currentIndex: number;
  constructor(private taskService : TaskService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentIndex = +params['index'];
    })
  }

addNewTask(){
    this.route.params.subscribe(params => {
      this.taskService.addNewTask(+params['index'],this.description);
    })
  alert("Task added successfully")

}

}
