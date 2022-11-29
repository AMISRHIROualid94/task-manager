import {Component, Input, OnInit} from '@angular/core';
import {TasksGroup} from "../../models/tasks-group";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

  @Input() tasks:TasksGroup;

  constructor() { }

  ngOnInit(): void {

  }

}
