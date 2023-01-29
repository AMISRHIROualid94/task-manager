import { Component, OnInit } from '@angular/core';
import {TaskGroupService} from "../../../services/taskGroup.service";
import {ActivatedRoute} from "@angular/router";
import {TasksGroup} from "../../../models/tasks-group";

@Component({
  selector: 'app-add-tasks-group',
  templateUrl: './add-tasks-group.component.html',
  styleUrls: ['./add-tasks-group.component.sass']
})
export class AddTasksGroupComponent implements OnInit {
  title: any;
  currentIndex: number ;
  constructor(private taskService:TaskGroupService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

  }

  addNewTaskGroup(){
    let newTaskgroup:TasksGroup = {
      title:this.title
    }
    this.taskService.addNewTasksGroupApi(newTaskgroup).subscribe()
    alert("successfully added")

    this.currentIndex =  newTaskgroup.id!
  }
}
