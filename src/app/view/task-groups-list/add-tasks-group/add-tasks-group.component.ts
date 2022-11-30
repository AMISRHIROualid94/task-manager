import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-add-tasks-group',
  templateUrl: './add-tasks-group.component.html',
  styleUrls: ['./add-tasks-group.component.sass']
})
export class AddTasksGroupComponent implements OnInit {
  title: any;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  addNewTaskGroup(){
    this.taskService.addNewTasksGroup(this.title)
    alert("successfully added")
  }
}
