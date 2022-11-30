import { Injectable } from '@angular/core';
import {TasksGroup} from "../models/tasks-group";
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   tasks1 : Task[]=[
    new Task("1","task1"),
    new Task("2","task2"),
    new Task("3","task3"),
    new Task("4","task4")
  ];
  tasks2 : Task[]=[
    new Task("1","task1"),
    new Task("2","task2"),
    new Task("3","task3"),
    new Task("4","task4")
  ];
  tasks3 : Task[]=[
    new Task("1","taskI"),
    new Task("2","taskII"),
    new Task("3","taskIII"),
    new Task("4","taskIV")
  ];
  tasks4 : Task[]=[
    new Task("1","task-a"),
    new Task("2","task-b"),
    new Task("3","task-c"),
    new Task("4","task-d")
  ];
 taskGroups: TasksGroup[] = [
  new TasksGroup("1","groupe1",this.tasks1),
  new TasksGroup("2","groupe2",this.tasks2),
  new TasksGroup("3","groupe3",this.tasks3),
  new TasksGroup("4","groupe4",this.tasks4)
];


  constructor() { }


getTasksGroups(){
    return this.taskGroups;
}
getTasksGroupsById(groupId:number){
    return this.taskGroups[groupId];
}
getGroupTasks(index:number){
  return this.taskGroups[index];
}
addNewTasksGroup(description: string){
    let newTaskgroup : TasksGroup = new TasksGroup("0","description")
    newTaskgroup.id = (+this.taskGroups[this.taskGroups.lastIndexOf(this.taskGroups[this.taskGroups.length - 1])].id + 1).toString()
    newTaskgroup.title = description
    this.taskGroups.push(newTaskgroup)
    console.log(newTaskgroup.id)
}

addNewTask(groupId:number,description: string){
    let newTask :Task = new Task("0","description")
    let taskGroup : TasksGroup = this.getTasksGroupsById(groupId)
    newTask.id = (taskGroup.tasks!.length + 1).toString()
    newTask.description = description
    taskGroup.tasks?.push(newTask)
}
}
